import { Card, Cards } from "fumadocs-ui/components/card";
import { source } from "@/lib/source";
import { icons as lucideIcons } from "lucide-react";
import { createElement } from "react";

const FYRA_PROJECTS = [
  {
    title: "Helium",
    href: "/helium/hig",
    slug: "helium/hig",
    icon: "Atom",
  },
  { title: "Terra", href: "/terra", slug: "terra", icon: "Earth" },
  { title: "Andaman", href: "/andaman", slug: "andaman", icon: "Hammer" },
  {
    title: "Submarine",
    href: "/submarine",
    slug: "submarine",
    icon: "Anchor",
  },
  {
    title: "SuzyQ Board",
    href: "/suzyqboard",
    slug: "suzyqboard",
    icon: "CircuitBoard",
  },
  { title: "Katsu", href: "/katsu", slug: "katsu", icon: "Soup" },
  {
    title: "Readymade and Taidan",
    href: "/rdms",
    slug: "rdms",
    icon: "ArrowDownToLine",
  },
] as const;

const OTHER_PROJECTS = [
  { title: "RPM", href: "/rpm", slug: "rpm", icon: "Package" },
] as const;

function getIcon(iconName: string | undefined): React.ReactNode | undefined {
  if (!iconName) return undefined;
  if (iconName in lucideIcons) {
    return createElement(lucideIcons[iconName as keyof typeof lucideIcons]);
  }
  return undefined;
}

export default function HomePage() {
  const fyraProjects = FYRA_PROJECTS.map((section) => ({
    ...section,
    description: source.getPage([section.slug])?.data.description ?? "",
    icon: getIcon(section.icon),
  }));
  const otherProjects = OTHER_PROJECTS.map((section) => ({
    ...section,
    description: source.getPage([section.slug])?.data.description ?? "",
    icon: getIcon(section.icon),
  }));

  return (
    <div className="flex flex-col flex-1 container mx-auto max-w-5xl p-8 prose">
      <header>
        <h1>Welcome</h1>
        <p>
          Welcome to Fyra Developer, a single place for all of our documentation
          for contributors and developers hacking on Fyra Labs projects.
        </p>
      </header>

      <section>
        <h2>Fyra Projects</h2>
        <Cards>
          {fyraProjects.map((section) => (
            <Card
              key={section.slug}
              title={section.title}
              href={section.href}
              description={section.description}
              icon={section.icon}
            />
          ))}
        </Cards>
      </section>

      <section>
        <h2>Other Projects</h2>
        <Cards>
          {otherProjects.map((section) => (
            <Card
              key={section.slug}
              title={section.title}
              href={section.href}
              description={section.description}
              icon={section.icon}
            />
          ))}
        </Cards>
      </section>

      <section>
        <h2>Community</h2>
        <p>
          Stuck? Have a question? Join our{" "}
          <a href="https://fyralabs.com/discord">Discord</a> community. Our
          community is friendly and always willing to help.
        </p>
      </section>

      <section>
        <h2>Contributing</h2>
        <p>
          This site is libre software and contributions are welcome. Check out
          the{" "}
          <a href="https://github.com/FyraLabs/devdocs">GitHub repository</a>{" "}
          for more information.
        </p>
      </section>
    </div>
  );
}
