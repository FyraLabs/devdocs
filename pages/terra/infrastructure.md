---
name: Infrastructure (How does Terra work exactly?)
description: The technical details behind the infrastructure and how different components work together.
---

# How Terra works

This document outlines the process of how a package ends up to the end users.

## Terra installation

There are two ways to install Terra:

1. By installing the `terra-release` package (recommended). This makes sure your Terra installation
   won't break even if we have any server migrations, infrastructure changes, etc.
2. With `.repo` files. We provide `.repo` files at https://github.com/terrapkg/subatomic-repos.

This document assumes Terra is installed via the 1st method. You should also look at the "Last
updated on" footnote (above the next page button; a feature of Nextra that you can see on all
pages) because things might change over time.

## Overview

```
╔═══════════════════╗                                               Website: https://terra.fyralabs.com/
║ Client (dnf/dnf5) ║                                               ────────────────────────────────────
║                   ║  from  ╭───────────────────────────────╮
║ 1. fetch metalink ╫────────┤ Tetsudou (Metalink generator) │🭮──╴repodata hashes ──┐
║                   ║        │                               │              ╭───────┴─────────────────────────╮
║                   ║        │ GitHub: terrapkg/tetsudou     │      ┌───────┤ Subatomic (RPM delivery system) │
║                   ║        │ URL: tetsudou.fyralabs.com    │   repodata/  │                                 │
║                   ║        ╰───────────────────────────────╯   SRPMs/RPMs │ GitHub: FyraLabs/subatomic      │
║                   ║        ╭───────────────────────────────╮      │       │ URL: subatomic.fyralabs.com     │
║ 2. fetch repodata ╫────────┤ (One of the many) RPM Mirrors │🭮─────┘ ┌────🭬│ API Docs: /docs/index.html      │
║                   ║        │                               │    ┌───┘     ╰─────────────────────────────────╯
║ 3. download RPMs ─╫────────┤ ╭┄┄ info for official mirror  │    │    ╭──────────────────────────────────────╮
║                   ║        │ URL: repos.fyralabs.com       │    │    │ Madoguchi (Simple package query API) │
║   (install...)    ║        │ Software: Caddy               │    │    │                                      │
║                   ║        │ Geo-location: DE              │    │    │ GitHub: terrapkg/madoguchi           │
╚═══════════════════╝        ╰───────────────────────────────╯    │    │ URL: madoguchi.fyralabs.com          │
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  ┌──────────────┐        upload comps   ╰───────🭯────┬─────────────────────────╯
┃ Monorepo for Terra Sources ┠──┤              ├───────╴/SRPMs/RPMs            │    └╌╌╌ Repology redirect URLs
┃                            ┃  │    GitHub    ├────╴record build/pkg stats╶───┘
┃ GitHub: terrapkg/packages  ┃  │    Actions   │🭮──┐                                          ┌───────┐
┃ URL: [N/A]                 ┠──┤              │🭮─┐└─╴build/bump packages from specs╶─┐       │ AndaX │
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  └──────────────┘  │                                   │       └───┬───┘
┌─────────────────────────────────────────────────┴───────┐    ┌──────────────────────┴───────────┴──────────┐
│ Terra CI Builder at https://github.com/terrapkg/builder │🭮───┤ Andaman at https://github.com/FyraLabs/anda │
└─────────────────────────────────────────────────────────┘    └─────────────────────────────────────────────┘
```

### Andaman

Also known as `anda`, a package build toolchain in Rust, designed to simplify building various package types.

- GitHub: https://github.com/FyraLabs/anda
- Devdocs: https://developer.fyralabs.com/andaman
- Fyra Wiki Page: https://wiki.fyralabs.com/Andaman

Anda internally calls [Mock] and `rpmbuild` to build RPM packages.

#### AndaX (`update.rhai`)

A scripting language based on [Rhai](https://rhai.rs) specifically made for writing update scripts.

- GitHub: https://github.com/FyraLabs/anda
- Devdocs: https://developer.fyralabs.com/terra/autoupdate
- Rhai playground: https://rhai.rs/playground/stable/

### Builder

CI images for Terra CI operations. They are based on the Fedora minimal Docker images, with tools installed so
we don't have to install them inside CI. Basically an image with preinstalled CI tools for our specific use.

- GitHub: https://github.com/terrapkg/builder

### Madoguchi

API for handling Terra-related queries, recording build failures/successes, spec location in the git repo,
and redirecting Repology links to the monorepo.

- GitHub: https://github.com/terrapkg/madoguchi
- URL: https://madoguchi.fyralabs.com

### Monorepo for Terra Sources

A monorepo hosted on GitHub with all the packages sources, including `.spec` files, update scripts
(`update.rhai`s), `anda.hcl`s, etc. If you want to submit package requess, go to this repository (since it's
the main issue tracker).

- GitHub: https://github.com/terrapkg/packages
- Devdocs: you are here
- Fyra Wiki Page: https://wiki.fyralabs.com/Terra

### Subatomic

A modern package delivery system for RPMs. It generates repodata and manages package uploads. `subatomic-cli`
is the command line tool used to upload the packages.

- GitHub: https://github.com/FyraLabs/subatomic
- URL: https://subatomic.fyralabs.com
- API Interactive Docs: https://subatomic.fyralabs.com/docs/index.html

### Tetsudou

A metalink generator, so the clients (dnf/dnf5) knows what mirrors a repo has and which ones are preferred.

- GitHub: https://github.com/terrapkg/tetsudou
- URL: https://tetsudou.fyralabs.com/metalink?repo=terrarawhide

## When CI builds a new package

1. The `autobuild.yml` workflow detects for changes in commits
2. In the `manifest` stage, `anda ci` finds out what directories have been changed in the last commit
3. A matrix of jobs will run for each architecture and each package
4. GitHub Actions fetches the Terra builders
5. It runs `anda build` with the Terra mock files
6. It uploads built SRPMs and RPMs to Subatomic only if the build is successful and it's not in a pull request
7. It notifies Madoguchi for a successful/failed build

## When dnf/dnf5 needs a Terra package

1. It fetches a [metalink](https://en.wikipedia.org/wiki/Metalink) XML file from Tetsudou, which
   - finds the repository's mirror information: https://github.com/terrapkg/tetsudou/tree/main/repos
   - uses numerous algorithms to determine which repository will be the fastest for that client
   - fetches the hashes/timestamps for the repomd.xml file, which is in the mirror generated by Subatomic
2. Client fetches repodata from a mirror
3. Client downloads RPM packages from the mirror
4. Client installs them

[Mock]: https://rpm-software-management.github.io/mock/
