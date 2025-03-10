import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center text-white p-[50px]">
      <p className="inline-flex items-center">
        <FaRegCopyright className="not-sr-only" /> Portfolio - Tous droits
        réservés - 2025
      </p>
    </footer>
  );
}
