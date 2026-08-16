import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { waLink } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const [qtyInput, setQtyInput] = useState(String(product.retailMin));
  const parsedQty = Number(qtyInput);
  const qty =
    Number.isInteger(parsedQty) && parsedQty >= product.retailMin
      ? parsedQty
      : product.retailMin;
  const orderType = qty >= product.wholesaleMoq ? "wholesale" : "retail";

  const adjustQty = (amount: number) => {
    setQtyInput(String(Math.max(product.retailMin, qty + amount)));
  };

  const orderMsg = `Hi Kulhad Factory, I'd like to place a ${orderType} order for ${qty} pcs of ${product.name}. Please share pricing and delivery.`;
  const quoteMsg = `Hi Kulhad Factory, please send a ${orderType} quote for ${qty} pcs of ${product.name}.`;

  return (
    <article className="hover-lift group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative aspect-square overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={`${product.name} — handcrafted clay kulhad`}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-secondary dark:text-secondary-foreground shadow-soft">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="min-w-0 truncate font-display text-lg font-bold text-foreground">
            {product.name}
          </h3>
          <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-secondary dark:text-secondary-foreground">
            {product.capacity}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <a
          href={`/products/${product.slug}`}
          className="text-sm font-semibold text-primary hover:underline"
        >
          View product details →
        </a>
        {product.price && (
          <div>
            <div className="text-lg font-bold text-primary">{product.price} per piece</div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Retail min {product.retailMin} pcs · Wholesale {product.wholesaleMoq}+ pcs
            </p>
          </div>
        )}
        <div className="mt-1 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Qty
          </span>
          <div className="flex items-center overflow-hidden rounded-full border border-border">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => adjustQty(-50)}
              className="grid h-8 w-8 place-items-center text-foreground hover:bg-muted"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <input
              type="number"
              min={product.retailMin}
              step={1}
              inputMode="numeric"
              value={qtyInput}
              aria-label={`Quantity for ${product.name}`}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^\d+$/.test(value)) {
                  setQtyInput(value);
                }
              }}
              onBlur={() => setQtyInput(String(qty))}
              className="w-20 border-0 bg-transparent text-center text-sm font-semibold text-foreground outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => adjustQty(50)}
              className="grid h-8 w-8 place-items-center text-foreground hover:bg-muted"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
          <a
            href={waLink(quoteMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent px-3 py-2 text-xs font-semibold text-primary transition hover:brightness-105"
          >
            Request Quote
          </a>
          <a
            href={waLink(orderMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
