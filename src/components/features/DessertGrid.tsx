"use client";

import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { urlFor } from "@/lib/sanity.image";

interface DessertItem {
  _id?: string;
  id?: string;
  title?: string;
  name?: string;
  price?: string;
  description?: string;
  category?: string;
  badge?: string;
  emoji?: string;
  flavor?: string;
  image?: unknown;
}

interface DessertGridProps {
  initialItems: DessertItem[];
  showAll?: boolean;
}

export default function DessertGrid({ initialItems, showAll = false }: DessertGridProps) {
  const [limit, setLimit] = useState(showAll ? initialItems.length : 8);
  const [activeItem, setActiveItem] = useState<DessertItem | null>(null);

  const displayItems = initialItems.slice(0, limit);

  return (
    <div className="space-y-12">
      {/* Dessert Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayItems.map((item: DessertItem, index: number) => {
          const isSanityItem = !!item._id;
          const itemId = isSanityItem ? item._id : item.id;
          const itemName = isSanityItem ? item.title : item.name;
          const itemPrice = isSanityItem ? item.price : item.price;
          const itemDescription = isSanityItem ? item.description : item.description;
          const itemCategory = isSanityItem ? item.category : item.category;
          const itemBadge = isSanityItem ? (index === 0 ? "New Creation" : undefined) : item.badge;
          const imageUrl = isSanityItem && item.image ? urlFor(item.image).url() : null;

          return (
            <div 
              key={itemId} 
              onClick={() => setActiveItem(item)}
              className="group bg-white rounded-3xl border border-sand hover:border-berry-rose/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Card visual wrapper */}
              <div>
                {/* Premium gradient header representing image placeholder or live image */}
                <div className="h-48 relative flex items-center justify-center border-b border-sand/50 overflow-hidden bg-gradient-to-br from-cream-medium via-cream-light to-berry-light/20">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={itemName} 
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent pointer-events-none" />
                      <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">{item.emoji || "🧁"}</div>
                    </>
                  )}
                  
                  {/* Category & Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-berry-crimson bg-berry-light px-2.5 py-1 rounded-full uppercase tracking-wider z-10">
                    {itemCategory}
                  </span>
                  
                  {itemBadge && (
                    <span className="absolute top-4 right-4 text-[10px] font-extrabold text-white bg-berry-deep px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                      {itemBadge}
                    </span>
                  )}

                  {/* Elegant decorative curves */}
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent z-10" />
                </div>

                {/* Card description details */}
                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-berry-deep group-hover:text-berry-crimson transition-colors duration-200">
                    {itemName}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed line-clamp-2">
                    {itemDescription}
                  </p>
                  
                  {/* Custom spec table */}
                  <div className="pt-3 flex flex-col gap-1.5 border-t border-sand/40">
                    <p className="text-xs text-chocolate-dark font-medium flex justify-between">
                      <span className="text-taupe">Flavor Profile:</span>
                      <span className="text-right max-w-[180px] truncate">
                        {isSanityItem ? "Artisanal Recipe" : item.flavor}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer pricing & call action */}
              <div className="px-8 pb-8 pt-4 border-t border-sand/40 flex justify-between items-center bg-cream-light/10">
                <div>
                  <span className="text-[10px] text-taupe uppercase tracking-wider block">Estimated Price</span>
                  <span className="text-lg font-bold text-berry-deep">{itemPrice}</span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-berry-crimson group-hover:text-berry-deep transition-colors">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* View Full Collection Button */}
      {!showAll && initialItems.length > 8 && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setLimit(limit === 8 ? initialItems.length : 8)}
            className="px-8 py-3.5 bg-berry-crimson hover:bg-berry-deep text-white font-medium rounded-full shadow-lg shadow-berry-crimson/15 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            {limit === 8 ? "View Full Collection" : "Show Less"}
          </button>
        </div>
      )}

      {/* Lightbox / Detail Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-sand flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-sand hover:bg-white text-chocolate-dark transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-[450px] relative bg-gradient-to-br from-cream-medium via-cream-light to-berry-light/20 flex items-center justify-center">
              {activeItem.image ? (
                <img 
                  src={urlFor(activeItem.image).url()} 
                  alt={activeItem.title || activeItem.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-8xl">{activeItem.emoji || "🧁"}</div>
              )}
            </div>

            {/* Right side: Details */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold text-berry-crimson bg-berry-light px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-3xl font-bold text-berry-deep">
                  {activeItem.title || activeItem.name}
                </h3>
                <p className="text-xl font-bold text-berry-crimson">
                  {activeItem.price}
                </p>
                <p className="text-sm text-taupe leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sand/60">
                <p className="text-xs text-chocolate-dark font-medium flex justify-between">
                  <span className="text-taupe font-medium">Flavor Profile:</span>
                  <span className="font-semibold">{activeItem.flavor || "Artisanal Recipe"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
