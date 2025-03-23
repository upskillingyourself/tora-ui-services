import React from "react";
import { Helmet } from "react-helmet-async";

const SeoMeta = ({ title, description, keywords, author, canonical }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />

    {/* Open Graph Tags for Social Media */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/android-chrome-192x192.png" />
    <meta property="og:url" content={window.location.href} />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/android-chrome-192x192.png" />
  </Helmet>
  );
};

export default SeoMeta;
