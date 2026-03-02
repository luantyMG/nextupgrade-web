import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import ImageFull from "../assets/images/bussines/LogoCompanyMain.png";

export const metadata: Metadata = {
  title: "NextUpgrade | Software Development",
  description:
    "NextUpgrade desarrolla soluciones digitales modernas, escalables y seguras, transformando la manera en que las instituciones trabajan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative bg-[#0F1116] text-[#E5E5E5] min-h-screen flex flex-col antialiased selection:bg-[#6C63FF]/30 selection:text-white">

        {/* Fondo sutil */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#0F1116] via-[#11131A] to-[#12141D]"></div>

        {/* NAVBAR */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0F1116]/80 border-b border-[#2C2F3B]">
          <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

            {/* Logo con imagen + texto */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={ImageFull}
                alt="NextUpgrade Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D1FF] to-[#6C63FF] bg-clip-text text-transparent font-bold text-lg transition-transform duration-300 group-hover:translate-x-1">
                NextUpgrade
              </span>
            </Link>

            {/* Navegación */}
            <nav className="hidden md:flex items-center gap-10 text-sm text-[#A1A1A1]">
              <Link href="/connected" className="hover:text-white transition">
                ConectED
              </Link>
              <Link href="/about" className="hover:text-white transition">
                Nosotros
              </Link>
               <Link href="/privacy-policy" className="hover:text-white transition">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Términos
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2 border border-[#2C2F3B] rounded-lg hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 transition"
              >
                Contacto
              </Link>
            </nav>

          </div>
        </header>

        {/* CONTENIDO GLOBAL */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-[#2C2F3B] bg-[#0F1116]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#A1A1A1]">
            <div className="flex items-center gap-4">
              <span className="text-[#6B7280] font-medium">
                © {new Date().getFullYear()} NextUpgrade
              </span>
              <span className="hidden md:block text-[#6C63FF]">|</span>
              <span>Software que impulsa instituciones</span>
            </div>

            <div className="flex gap-8 text-[#6B7280]">
              <Link href="/connected" className="hover:text-white transition">
                ConectED
              </Link>
              <Link href="/about" className="hover:text-white transition">
                Nosotros
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                Contacto
              </Link>
             
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}