import type { Metadata } from "next";
import "@/sass/main.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <title>#BezglutenowaKarola - Przepisy Gluten Free</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>{children}</body>
    </html>
  );
}
