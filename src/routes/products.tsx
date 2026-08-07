import * as React from "react";
import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { products as localProducts } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: ({ params }) => {
    const isProductDetail = Boolean((params as { slug?: string }).slug);

    return {
      links: isProductDetail
        ? []
        : [{ rel: "canonical", href: "https://www.kulhad.shop/products" }],
      meta: [
        { property: "og:title", content: "Products - Clay Kulhads by Kulhad Factory" },
        { property: "og:url", content: "https://www.kulhad.shop/products" },
        { property: "og:locale", content: "en_IN" },
        { property: "og:image:width", content: "1600" },
        { property: "og:image:height", content: "995" },
        { name: "twitter:title", content: "Products - Clay Kulhads by Kulhad Factory" },
        { property: "og:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
        { name: "twitter:image", content: "https://www.kulhad.shop/images/home-kulhads.webp" },
        { title: "Products — Clay Kulhads by Kulhad Factory" },
        {
          name: "description",
          content: "Browse handcrafted clay kulhads from 60ml tea cups to 300ml lassi glasses.",
        },
      ],
      scripts: isProductDetail
        ? []
        : [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Clay Kulhads",
                itemListElement: localProducts.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    name: p.name,
                    description: p.description,
                    image: `https://www.kulhad.shop${p.image}`,
                    sku: p.slug,
                    brand: { "@type": "Brand", name: "Kulhad Factory" },
                    offers: {
                      "@type": "Offer",
                      price: p.price.replace(/[^\d.]/g, ""),
                      priceCurrency: "INR",
                      availability: "https://schema.org/InStock",
                      url: "https://www.kulhad.shop/products",
                    },
                  },
                })),
              }),
            },
          ],
    };
  },
  component: ProductsPage,
});

function ProductsPage() {
  const isProductDetail = useRouterState({
    select: (state) => state.matches.some((match) => match.routeId === "/products/$slug"),
  });

  if (isProductDetail) {
    return <Outlet />;
  }

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
            <div key={p.slug} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
