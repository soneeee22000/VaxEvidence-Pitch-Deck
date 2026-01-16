import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VaxEvidence - Pitch Deck",
  description: "Real-World Evidence Platform for Vaccine Scientists. From Data to Regulatory Decision in Days, Not Months.",
  keywords: ["vaccine", "real-world evidence", "RWE", "pharma", "clinical research", "AI", "healthcare"],
  authors: [{ name: "VaxEvidence Team" }],
  icons: {
    icon: "/logo-final.svg",
    shortcut: "/logo-final.svg",
    apple: "/logo-final.svg",
  },
  openGraph: {
    title: "VaxEvidence - Pitch Deck",
    description: "AI-Powered Real-World Evidence Platform for Vaccine Scientists",
    type: "website",
    images: ["/logo-final.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
