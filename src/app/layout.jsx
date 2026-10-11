import "./globals.css";

export const metadata = {
  title: "Udhayasurya U | Full-Stack, Web3 & AI Developer",
  description:
    "Full-stack developer with experience in MERN stack, Next.js, FastAPI, Web3, DeFi protocols, and AI automation. Delivering scalable and high-performance solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
