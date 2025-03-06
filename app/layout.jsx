import "./globals.scss";
import "./global.css";

export const metadata = {
  title: "Portfolio - Ludivine",
  description: "Portfolio de Ludivine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
