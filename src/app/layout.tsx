import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adam Boettiger | Fractional CMO',
  description: 'Helping growth-stage B2B companies scale pipeline and ARR.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 transition duration-300">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
            <span className="font-semibold text-lg tracking-tight">Adam Boettiger</span>
            <div className="space-x-6 hidden md:flex">
              <a href="#about" className="hover:underline">About</a>
              <a href="#services" className="hover:underline">Services</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </nav>
        </header>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
