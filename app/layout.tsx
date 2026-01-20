import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          data-domain="developer.fyralabs.com"
          src="https://plausible.fyralabs.com/js/script.outbound-links.js"
        ></Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
