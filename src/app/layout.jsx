import "./globals.css";

export const metadata = {
  title: "Udhayasurya U | Full-Stack & Web3 Developer",
  description:
    "Full-stack developer specializing in MERN, Next.js, Web3, DeFi & AI. Building the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
