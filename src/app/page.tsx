import React from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  Award, 
  Send, 
  ShieldCheck, 
  Layers,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { client } from "@/lib/sanity.client";
import DessertGrid from "@/components/features/DessertGrid";

export const dynamic = "force-dynamic";

// Mock data for featured grid items
const FEATURED_ITEMS = [
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

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Dream Concept & Sketching",
    description: "We consult with you to sketch your vision, aligning on theme, favorite flavor notes, and elegant custom styling."
  },
  {
    step: "02",
    title: "Flavor Balancing & Pairing",
    description: "We select premium ingredients, matching delicate sponge flavors with fresh compotes and whipped buttercreams."
  },
  {
    step: "03",
    title: "Baking & Sculpting",
    description: "Using organic ingredients, we bake delicious sponge layers and sculpt them into stunning tiered creations."
  },
  {
    step: "04",
    title: "Fine Piping & Presentation",
    description: "Every petal, curl, and texture is meticulously piped and finished with edible gold leaf by our Master Pastry Chef."
  }
];

export default async function Home() {
  const query = `*[_type == "dessert"] {
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
    console.error("Error fetching desserts from Sanity:", error);
  }
  const displayItems = desserts.length > 0 ? desserts : FEATURED_ITEMS;
  return (
    <div className="flex flex-col min-h-screen bg-cream-light font-sans text-chocolate-dark selection:bg-berry-light selection:text-berry-deep">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-medium/40 via-cream-light to-cream-light py-20 px-6 md:py-32">
        {/* Decorative dynamic ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-gradient from-berry-light/25 via-transparent to-transparent -mr-48 -mt-24 pointer-events-none rounded-full blur-3xl animate-pulse duration-[8000ms]" />
        <div className="absolute -left-20 bottom-10 w-96 h-96 bg-radial-gradient from-cream-medium/80 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-berry-light/60 border border-berry-rose/20 text-berry-crimson text-xs font-semibold tracking-wide uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Exquisite Custom Celebration Cakes</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-berry-deep tracking-tight">
              Baking Sweet Memories <br />
              <span className="text-berry-crimson italic">of Elegant Joy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-taupe max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              At <strong className="font-semibold text-chocolate-dark">Cassie Cakes & Cookies</strong>, we blend artisanal pastry craft with sensory artistry to bake gorgeous, multi-layered custom celebration cakes and melt-in-mouth gourmet cookies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#custom" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-berry-crimson/10 hover:shadow-xl hover:shadow-berry-crimson/20 transition-all duration-300">
                  <span>Inquire Custom Cake</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="#featured" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Signature Menu
                </Button>
              </a>
            </div>

            {/* Subtle metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sand/60 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-3xl font-bold text-berry-deep">100%</p>
                <p className="text-xs text-taupe uppercase tracking-wider mt-1">Edible Elements</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-berry-deep">350+</p>
                <p className="text-xs text-taupe uppercase tracking-wider mt-1">Events Styled</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-berry-deep">4.9 ★</p>
                <p className="text-xs text-taupe uppercase tracking-wider mt-1">Client Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant outer glow ring */}
            <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-berry-rose/10 bg-gradient-to-tr from-berry-light/20 to-cream-medium/40 pointer-events-none scale-105" />
            <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border-2 border-dashed border-berry-rose/20 animate-spin duration-[40000ms] pointer-events-none" />

            {/* Premium visual representation */}
            <div className="relative w-80 h-80 md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-berry-rose to-berry-light p-1.5 shadow-2xl hover:scale-[1.02] transition-transform duration-500 overflow-hidden flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-cream-light/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 border border-sand">
                {/* Custom CSS Floating Art */}
                <div className="relative mb-6 flex flex-col items-center">
                  <div className="text-6xl animate-bounce duration-[3000ms]">🎂</div>
                  <div className="absolute -top-3 right-6 text-2xl animate-pulse">✨</div>
                  <div className="absolute top-8 -left-6 text-xl rotate-12">🌸</div>
                  {/* Floating sparkles dotted path */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-berry-rose to-transparent mt-2" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-berry-deep">The Cassie Standard</h3>
                <p className="text-xs text-taupe mt-2 max-w-[240px]">
                  Luxurious tiered masterpieces hand-finished with silky, whipped Swiss meringue buttercream.
                </p>
                <div className="mt-4 px-3 py-1 bg-berry-light rounded-full text-[10px] font-semibold text-berry-crimson uppercase tracking-wider">
                  Pure Artisanal Butter
                </div>
              </div>
            </div>

            {/* Floating interactive badges */}
            <div className="absolute -top-4 -right-2 bg-white px-4 py-2.5 rounded-2xl border border-sand shadow-lg flex items-center gap-2.5 animate-bounce duration-[6000ms]">
              <div className="w-7 h-7 rounded-full bg-berry-light flex items-center justify-center text-xs">🍰</div>
              <div>
                <p className="text-[10px] text-taupe font-medium leading-none">Bespoke Design</p>
                <p className="text-xs font-bold text-berry-deep leading-normal mt-0.5">Bespoke Flavors</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2.5 rounded-2xl border border-sand shadow-lg flex items-center gap-2.5 animate-bounce duration-[7000ms] [animation-delay:1500ms]">
              <div className="w-7 h-7 rounded-full bg-cream-medium flex items-center justify-center text-xs">🍪</div>
              <div>
                <p className="text-[10px] text-taupe font-medium leading-none">Award Winner</p>
                <p className="text-xs font-bold text-berry-deep leading-normal mt-0.5">Gourmet Standard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTORY SECTION: THE FLAVOR SHOWCASE */}
      <section id="about" className="py-24 px-6 bg-cream-medium/40 border-y border-sand/70 relative scroll-mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Dynamic Graphic Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-berry-rose/20 to-berry-crimson/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-sand shadow-lg space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-berry-rose uppercase tracking-wider">Flavor & Artistry</span>
                  <h3 className="font-serif text-2xl font-bold text-berry-deep">The Art of Slow Baking & Fine Piping</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-berry-light text-[10px] font-bold text-berry-crimson">
                  Signature Concept
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-cream-light border border-sand/50 space-y-4">
                <div className="flex items-center gap-4 text-sm text-chocolate-dark">
                  <div className="w-8 h-8 rounded-lg bg-berry-light flex items-center justify-center text-berry-crimson shrink-0 font-bold font-serif">1</div>
                  <p><strong>Handcrafted Flavor Profiles:</strong> Madagascar vanilla bean, dark Belgian cocoa, and farm-to-table berry compotes.</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-chocolate-dark">
                  <div className="w-8 h-8 rounded-lg bg-berry-light flex items-center justify-center text-berry-crimson shrink-0 font-bold font-serif">2</div>
                  <p><strong>Velvet Swiss Meringue:</strong> Silky, whipped, lightly-sweet buttercream frosting made with organic farm-fresh eggs and premium butter.</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-chocolate-dark">
                  <div className="w-8 h-8 rounded-lg bg-berry-light flex items-center justify-center text-berry-crimson shrink-0 font-bold font-serif">3</div>
                  <p><strong>Fine Edible Artistry:</strong> Meticulously crafted hand-piped sugar petals, gold leaf accents, and delicate textures tailored to your style.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-xl bg-berry-light/20 border border-berry-rose/10">
                  <p className="text-[10px] text-taupe uppercase font-semibold">Slow-Baked Quality</p>
                  <p className="text-xl font-bold text-berry-crimson mt-0.5">12 - 24 Hours Curing</p>
                </div>
                <div className="p-4 rounded-xl bg-berry-light/20 border border-berry-rose/10">
                  <p className="text-[10px] text-taupe uppercase font-semibold">Scratch Recipes</p>
                  <p className="text-xl font-bold text-berry-crimson mt-0.5">100% Original</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Explanations */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-berry-crimson text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Our Artisanal Approach</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-berry-deep leading-tight">
                Cakes That Leave <br />
                A Lasting Impression
              </h2>
              <p className="text-taupe text-lg leading-relaxed">
                Why settle for an ordinary dessert when you can have a beautiful celebration cake that is the center of attention and delight?
              </p>
            </div>
            
            <p className="text-taupe leading-relaxed font-light font-sans">
              From multi-tiered lavender-infused sponges to delicate hand-piped Swiss meringue buttercreams, Cassie&apos;s signature desserts are bespoke marvels. Every creation is slow-baked to lock in flavor, ensuring a texture as rich and velvety as it looks, and customized with organic gourmet ingredients like rich Belgian chocolates and fresh, locally sourced fruits.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-berry-rose" />
                <span className="text-sm font-medium text-chocolate-dark">Organic ingredients & custom flavor combinations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-berry-rose" />
                <span className="text-sm font-medium text-chocolate-dark">Bespoke design themes aligned with your aesthetic</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-berry-rose" />
                <span className="text-sm font-medium text-chocolate-dark">Hand-delivered in specialized temperature-controlled cases</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="#custom">
                <Button variant="primary" size="md" className="group">
                  <span>Request an Artistry Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED PRODUCTS GRID */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto w-full scroll-mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-berry-crimson text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Indulge in Excellence</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-berry-deep">Signature Baked Masterpieces</h2>
            <p className="text-taupe leading-relaxed">
              Explore our core catalog. From exquisite celebration cakes to custom layer designs and luxury cookies, every item is baked fresh with organic ingredients and European butter.
            </p>
          </div>
          <div>
            <a href="#custom">
              <Button variant="outline" className="w-full md:w-auto">
                Inquire Special Customizations
              </Button>
            </a>
          </div>
        </div>

        <DessertGrid initialItems={displayItems} />
      </section>

      {/* 4. THE CRAFTING PROCESS SECTION */}
      <section className="py-24 px-6 bg-chocolate-dark text-cream-light relative overflow-hidden">
        {/* Soft luxury background lighting */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-radial-gradient from-berry-deep/30 via-transparent to-transparent -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold text-berry-rose uppercase tracking-wider block">Artistry in Motion</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-light">How We Build Magic</h2>
            <p className="text-cream-light/70 max-w-xl mx-auto font-light">
              Crafting a custom celebration cake requires meticulous baking, precise flavor balancing, and absolute culinary devotion. Here is our step-by-step pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <span className="font-serif text-5xl font-extrabold text-berry-rose/40 block">{step.step}</span>
                <h3 className="font-serif text-xl font-bold text-cream-light">{step.title}</h3>
                <p className="text-sm text-cream-light/70 font-light leading-relaxed">{step.description}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 translate-x-1/2 z-20 text-berry-rose/30">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CUSTOM ORDER / INQUIRY SECTION */}
      <section id="custom" className="py-24 px-6 max-w-4xl mx-auto w-full scroll-mt-12">
        <div className="bg-white rounded-3xl p-8 md:p-14 border border-sand shadow-xl space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-berry-light to-transparent opacity-75 rounded-full" />
          
          <div className="text-center space-y-4 relative z-10">
            <div className="w-12 h-12 bg-berry-light rounded-full flex items-center justify-center mx-auto text-xl">🎉</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-berry-deep">Order Your Dream Masterpiece</h2>
            <p className="text-taupe text-sm max-w-lg mx-auto leading-relaxed">
              Every custom cake is a unique masterpiece of flavor and design. Submit your details below, and our Master Pastry Chef will get back to you with flavor concepts and design ideas.
            </p>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-taupe mb-2">Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream-light/30 focus:outline-none focus:ring-2 focus:ring-berry-rose/25 focus:border-berry-rose transition duration-200 text-chocolate-dark text-sm placeholder:text-taupe/40" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-taupe mb-2">Email Address *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream-light/30 focus:outline-none focus:ring-2 focus:ring-berry-rose/25 focus:border-berry-rose transition duration-200 text-chocolate-dark text-sm placeholder:text-taupe/40" 
                  placeholder="name@example.com" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-taupe mb-2">Type of Event *</label>
                <select 
                  className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream-light/30 focus:outline-none focus:ring-2 focus:ring-berry-rose/25 focus:border-berry-rose transition duration-200 text-chocolate-dark text-sm"
                >
                  <option>Wedding Celebration</option>
                  <option>Bespoke Birthday</option>
                  <option>Anniversary / Gala</option>
                  <option>Corporate Celebration Dessert Bar</option>
                  <option>Other Special Occasion</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-taupe mb-2">Expected Serve Count *</label>
                <select 
                  className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream-light/30 focus:outline-none focus:ring-2 focus:ring-berry-rose/25 focus:border-berry-rose transition duration-200 text-chocolate-dark text-sm"
                >
                  <option>10 - 25 servings</option>
                  <option>25 - 50 servings</option>
                  <option>50 - 100 servings</option>
                  <option>100 - 200 servings</option>
                  <option>200+ servings (Grand Celebration)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-taupe mb-2">Design Concept Notes & Preferred Flavors *</label>
              <textarea 
                rows={5} 
                required
                className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream-light/30 focus:outline-none focus:ring-2 focus:ring-berry-rose/25 focus:border-berry-rose transition duration-200 text-chocolate-dark text-sm placeholder:text-taupe/40" 
                placeholder="Describe your theme, color palette, favorite flavors (e.g., champagne, raspberry, salted caramel), and styles..." 
              />
            </div>

            <div className="p-4 rounded-xl bg-berry-light/35 border border-berry-rose/10 flex gap-3 text-xs text-berry-deep">
              <ShieldCheck className="w-5 h-5 text-berry-rose shrink-0 mt-0.5" />
              <p>
                <strong>Order Window:</strong> Bespoke celebration cakes require a minimum of <strong>3 weeks notice</strong> for recipe curation and detailed hand-piping. If your event is sooner, please submit and note &quot;RUSH&quot; in your inquiry.
              </p>
            </div>

            <Button type="submit" className="w-full py-4 text-sm font-semibold shadow-md shadow-berry-crimson/15 transition-all duration-300">
              <Send className="w-4 h-4 mr-2" />
              <span>Submit Custom Design Inquiry</span>
            </Button>
          </form>
        </div>
      </section>

      {/* 6. POLISHED TESTIMONIALS SECTION */}
      <section id="contact" className="bg-berry-light/20 py-24 px-6 border-t border-sand/40 scroll-mt-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold text-berry-rose uppercase tracking-wider block">Client Love Stories</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-berry-deep">Acclaimed by Gourmet Collectors</h2>
            <p className="text-taupe max-w-md mx-auto">
              Our celebration cakes represent premium taste and aesthetic balance. Read our real clients&apos; reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-sand/50 shadow-sm space-y-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 text-berry-rose">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-taupe font-bold uppercase tracking-wider bg-cream-medium px-2 py-0.5 rounded-full">Wedding Art</span>
              </div>
              <p className="italic text-chocolate-dark font-light leading-relaxed font-sans">
                &quot;Cassie designed our five-tier celebration cake, and it was a breathtaking marvel! The delicate sugar roses cascading down the tiers looked incredibly lifelike. Beyond the visual artistry, the champagne and elderflower flavors were exceptionally light and moist. Absolutely outstanding!&quot;
              </p>
              <div className="pt-4 border-t border-sand/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-berry-light flex items-center justify-center font-bold text-berry-crimson text-sm">SR</div>
                <div>
                  <h4 className="font-serif font-bold text-berry-deep">Samantha R.</h4>
                  <span className="text-xs text-taupe">Bride • September 2025</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-sand/50 shadow-sm space-y-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 text-berry-rose">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-taupe font-bold uppercase tracking-wider bg-cream-medium px-2 py-0.5 rounded-full">Gourmet Box</span>
              </div>
              <p className="italic text-chocolate-dark font-light leading-relaxed font-sans">
                &quot;The gourmet red velvet and whiskey espresso cookies are simply divine. Soft, gooey cores with perfectly crunchy caramelized edges. We ordered 4 custom gourmet boxes for our executive clients, and the custom luxury cream branding and detailed menu cards blew them away.&quot;
              </p>
              <div className="pt-4 border-t border-sand/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-medium flex items-center justify-center font-bold text-berry-deep text-sm">MG</div>
                <div>
                  <h4 className="font-serif font-bold text-berry-deep">Marcus G.</h4>
                  <span className="text-xs text-taupe">Gourmet Collector • Corporate Partner</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
