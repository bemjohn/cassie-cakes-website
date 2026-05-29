import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Cassie Cakes & Cookies | Premium Handcrafted Bakery",
  description: "Indulge in artisanal cakes, custom celebration pastries, and gourmet cookies crafted with love. Cassie Cakes & Cookies brings sweetness to your special occasions.",
  keywords: ["bakery", "custom cakes", "cookies", "pastries", "Cassie Cakes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} scroll-smooth h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream-light text-chocolate-dark font-sans">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-cream-light/80 backdrop-blur-md border-b border-sand px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="font-serif text-2xl font-bold text-berry-deep">
              Cassie Cakes <span className="text-berry-rose">&</span> Cookies
            </span>
            <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
              <a href="#about" className="hover:text-berry-crimson transition">About Us</a>
              <a href="#menu" className="hover:text-berry-crimson transition">Menu</a>
              <a href="#custom" className="hover:text-berry-crimson transition">Custom Orders</a>
              <a href="#contact" className="hover:text-berry-crimson transition">Contact</a>
            </nav>
            <button className="bg-berry-crimson hover:bg-berry-deep text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300">
              Order Now
            </button>
          </div>
        </header>

        {/* Core page body content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-chocolate-dark text-cream-light py-12 px-6 border-t border-berry-deep/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Cassie Cakes & Cookies</h3>
              <p className="text-sm text-cream-light/75">
                Baking your dreams into reality. Specializing in bespoke cakes and premium baked cookies.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm tracking-wider uppercase mb-4 text-berry-rose">Hours</h4>
              <p className="text-sm text-cream-light/75">Tuesday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-cream-light/75">Sunday: 10:00 AM - 3:00 PM</p>
            </div>
            <div>
              <h4 className="font-medium text-sm tracking-wider uppercase mb-4 text-berry-rose">Contact</h4>
              <p className="text-sm text-cream-light/75">Email: hello@cassiecakes.com</p>
              <p className="text-sm text-cream-light/75">WhatsApp: +123 456 7890</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-cream-light/10 text-center text-xs text-cream-light/50">
            © {new Date().getFullYear()} Cassie Cakes & Cookies. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
