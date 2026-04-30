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

  let url = "";
  if (
    slug.toString() === "appstream" ||
    slug.toString() === "autoupdate" ||
    slug.toString() === "contributing" ||
    slug.toString() === "guidelines" ||
    slug.toString() === "policies" ||
    slug.toString() === "srpm"
  ) {
    url = `https://docs.terrapkg.com/contributing/${slug}`;
  } else if (slug.toString() === "installing" || slug.toString() === "lifecycle") {
    url = `https://docs.terrapkg.com/usage/${slug}`;
  } else if (slug.toString() === "infrastructure") {
    url = `https://docs.terrapkg.com/general/${slug}`;
  } else if (slug.toString() === "faq") {
    url = `https://docs.terrapkg.com/reference/${slug}`;
  } else {
    url = "https://docs.terrapkg.com";
  }

  permanentRedirect(url);
}
