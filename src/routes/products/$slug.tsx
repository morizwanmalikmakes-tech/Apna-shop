import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { products } from "@/lib/products";
import { site, waLink } from "@/lib/site";

const BASE_URL = "https://www.kulhad.shop";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);

    if (!product) {
      return {
        meta: [{ title: "Product Not Found — Kulhad Factory" }],
      };
    }

    const productUrl = `${BASE_URL}/products/${product.slug}`;
    const imageUrl = product.image.startsWith("http")
      ? product.image
      : `${BASE_URL}${product.image}`;

    return {
      meta: [
        { title: `${product.name} | Kulhad Factory` },
        {
          name: "description",
          content: `${product.name} handmade clay kulhad from Kulhad Factory, Moradabad. Factory-direct pricing and India-wide delivery.`,
        },
        { property: "og:type", content: "product" },
        { property: "og:title", content: `${product.name} | Kulhad Factory` },
        {
          property: "og:description",
          content: product.description,
        },
        { property: "og:url", content: productUrl },
        { property: "og:image", content: imageUrl },
        { property: "og:image:alt", content: `${product.name} handcrafted clay kulhad` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${product.name} | Kulhad Factory` },
        { name: "twitter:description", content: product.description },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: productUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kulhad.shop/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Products",
                item: "https://www.kulhad.shop/products",
              },
            ],
          }),
        },

        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: [imageUrl],
            sku: product.slug,
            category: product.category,
            brand: {
              "@type": "Brand",
              name: site.name,
            },
            offers: {
              "@type": "Offer",
              url: productUrl,
              priceCurrency: "INR",
              price: product.price.replace(/[^\d.]/g, ""),
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: site.name,
              },
            },
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { slug } = Route.useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-foreground">Product not found</h1>
          <p className="mt-3 text-muted-foreground">Ye product available nahi hai.</p>
          <Link
            to="/products"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            View all products
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const orderMessage = `Hi Kulhad Factory, I'd like to order 50 pcs of ${product.name}. Please share pricing and delivery.`;
  const quoteMessage = `Hi Kulhad Factory, please send a quote for ${product.name}.`;

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/products" className="text-sm font-semibold text-primary hover:underline">
          ← Back to all products
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl border border-border bg-sand shadow-warm">
            <img
              src={product.image}
              alt={`${product.name} — handcrafted clay kulhad`}
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {product.category}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-4">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Capacity</dt>
                <dd className="mt-1 font-display text-xl font-bold text-primary">
                  {product.capacity}
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Price</dt>
                <dd className="mt-1 font-display text-xl font-bold text-primary">
                  {product.price}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Request Quote
              </a>
              <a
                href={waLink(orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
