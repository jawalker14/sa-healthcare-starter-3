import React from 'react';

export const generateSEO = ({
  title,
  description,
  keywords,
  author,
  url,
  image,
}: {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {url && <link rel="canonical" href={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
    </>
  );
};