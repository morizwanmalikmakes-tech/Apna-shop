import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { defaultProducts, type Product } from "@/lib/products";
import { products as localProducts } from "@/lib/products";

const ADMIN_API = "http://localhost:3000";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Clay Kulhads by Kulhad Factory" },
      {
        name: "description",
        content:
          "Browse handcrafted clay kulhads from 60ml tea cups to 300ml lassi glasses.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
const products = localProducts;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Product Range"
        title="Every size, every occasion."
        subtitle="Chhoti chai wali kulhad se lekar lassi ke glass tak, hamari range chai ki dukaano, cafés, restaurants aur exporters ke liye hai."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, i) => (
            <div
              key={p.slug}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
