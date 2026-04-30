import { permanentRedirect } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: ["appstream"] },
    { slug: ["autoupdate"] },
    { slug: ["contributing"] },
    { slug: ["faq"] },
    { slug: ["guidelines"] },
    { slug: ["index"] },
    { slug: ["infrastructure"] },
    { slug: ["installing"] },
    { slug: ["lifecycle"] },
    { slug: ["policies"] },
    { slug: ["srpm"] },
  ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const slugKey = slug.toString();
  const REDIRECT_MAP: Record<string, string> = {
    appstream: `https://docs.terrapkg.com/contributing/${slug}`,
    autoupdate: `https://docs.terrapkg.com/contributing/${slug}`,
    contributing: `https://docs.terrapkg.com/contributing/${slug}`,
    guidelines: `https://docs.terrapkg.com/contributing/${slug}`,
    policies: `https://docs.terrapkg.com/contributing/${slug}`,
    srpm: `https://docs.terrapkg.com/contributing/${slug}`,
    installing: `https://docs.terrapkg.com/usage/${slug}`,
    lifecycle: `https://docs.terrapkg.com/usage/${slug}`,
    infrastructure: `https://docs.terrapkg.com/general/${slug}`,
    faq: `https://docs.terrapkg.com/reference/${slug}`,
  };

  permanentRedirect(REDIRECT_MAP[slugKey] ?? "https://docs.terrapkg.com");
}
