import { permanentRedirect } from "next/navigation";

export function generateStaticParams() {
    return [{ slug: ["redirect"] }]
}

export default async function Page() {
    permanentRedirect("https://docs.terrapkg.com");
}
