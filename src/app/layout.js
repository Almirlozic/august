import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Night Club",
  description: "Copenhagen Night Life Entertainment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${ubuntu.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
