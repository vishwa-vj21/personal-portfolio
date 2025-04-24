import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Seo = ({
  title = "Aathif Zahir | Software Engineering Student",
  description = "Portfolio website of Aathif Zahir, a software engineering student specializing in full-stack development.",
  keywords = "Aathif Zahir, software engineering, full-stack developer, React, portfolio, projects",
  ogImage = "/og-image.jpg",
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile viewport optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />

      {/* Color theme */}
      <meta name="theme-color" content="#2662d9" />
    </Helmet>
  );
};

export default Seo;
