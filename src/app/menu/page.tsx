import React from "react";
import { Sparkles, Layers } from "lucide-react";
import { client } from "@/lib/sanity.client";
import DessertGrid from "@/components/features/DessertGrid";

export const dynamic = "force-dynamic";

// Fallback items in case Sanity database query fails or is empty during review
const FALLBACK_MENU = [
  {
    id: "item-1",
    name: "The Tiered Lavender Rose Cake",
    category: "Bespoke Celebration Cakes",
    description: "A luxurious tiered cake infused with organic lavender petals, filled with sweet raspberry compote and fresh vanilla bean Swiss meringue.",
    flavor: "Champagne Vanilla & Strawberry Gelee",
    badge: "Masterpiece",
    emoji: "🎂",
    price: "$280+"
  },
  {
    id: "item-2",
    name: "Gooey Red Velvet Berry Cookie",
    category: "Gourmet Cookies",
    description: "Deep red cocoa cookies stuffed with a white chocolate core and wild freeze-dried berries.",
    flavor: "Red Velvet & Cream Cheese Core",
    badge: "Best Seller",
    emoji: "🍪",
    price: "$28 / Box"
  },
  {
    id: "item-3",
    name: "Whiskey Salted Caramel Tart",
    category: "Premium Pastries",
    description: "Flaky cocoa pastry base filled with single-malt whiskey caramel and bittersweet chocolate ganache.",
    flavor: "Dark Chocolate & Smoked Sea Salt",
    badge: "Chef's Special",
    emoji: "🧁",
    price: "$45"
  },
  {
    id: "item-4",
    name: "The Classic Red Velvet Layer Cake",
    category: "Bespoke Celebration Cakes",
    description: "Rich, cocoa-infused sponge layers paired with a smooth cream cheese filling and elegant hand-piped frosting.",
    flavor: "Lemon Elderflower & Earl Grey",
    badge: "Trending",
    emoji: "🍰",
    price: "$340+"
  },
  {
    id: "item-5",
    name: "Dark Chocolate Espresso Pave",
    category: "Gourmet Cookies",
    description: "Fudge-like cookies made with 72% Valrhona chocolate and double-shot organic espresso.",
    flavor: "Espresso & Roasted Macadamia",
    badge: "Intense",
    emoji: "🍫",
    price: "$30 / Box"
  },
  {
    id: "item-6",
    name: "Rosewater & Pistachio Layer Cake",
    category: "Bespoke Cakes",
    description: "Moist Persian love cake layers layered with crushed pistachios and delicate rosewater buttercream.",
    flavor: "Cardamom, Pistachio & Rosewater",
    badge: "Elegant",
    emoji: "🧁",
    price: "$120+"
  }
];

export default async function MenuPage() {
  const query = `*[_type == "dessert"] | order(_createdAt desc) {
    _id,
    title,
    price,
    description,
    category,
    image
  }`;

  let desserts = [];
  try {
    desserts = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching desserts from Sanity on Menu page:", error);
  }

  const menuItems = desserts.length > 0 ? desserts : FALLBACK_MENU;

  return (
    <div className="min-h-screen bg-cream-light font-sans text-chocolate-dark selection:bg-berry-light selection:text-berry-deep pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-medium/40 via-cream-light to-cream-light py-16 px-6 border-b border-sand/70">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-radial-gradient from-berry-light/15 via-transparent to-transparent -mr-32 -mt-16 pointer-events-none rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-berry-light/60 border border-berry-rose/20 text-berry-crimson text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Full Catalog</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] text-berry-deep tracking-tight">
            Our Signature Menu
          </h1>
          
          <p className="text-lg text-taupe max-w-xl mx-auto font-light leading-relaxed">
            Every item is handcrafted to order with European cultured butter, organic farm-fresh eggs, and pure vanilla bean, bringing luxury flavors to your table.
          </p>
        </div>
      </section>

      {/* Dynamic Products Grid Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-berry-crimson text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Artisanal Collections</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-berry-deep">Exquisite Baked Masterpieces</h2>
            <p className="text-taupe leading-relaxed text-sm">
              Browse our complete, live-updated collection. Click on any card to view the flavor profile, ingredients details, and full descriptions.
            </p>
          </div>
        </div>

        {/* Dynamic Dessert Grid Component */}
        <DessertGrid initialItems={menuItems} showAll={true} />
      </section>
    </div>
  );
}
