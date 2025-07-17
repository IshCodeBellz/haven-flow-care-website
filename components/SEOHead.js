// components/SEOHead.js
import Head from "next/head";

export default function SEOHead({ title, description, url, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Haven Flow, care agency, Ofsted nanny, SEND support, childcare London"
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || "/images/og-image.jpg"} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
