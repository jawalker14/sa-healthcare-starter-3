import React from 'react';

export function generateSEO({
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
}): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  nodes.push(React.createElement('title', { key: 'title' }, title));
  nodes.push(React.createElement('meta', { key: 'desc', name: 'description', content: description }));
  if (keywords) nodes.push(React.createElement('meta', { key: 'kw', name: 'keywords', content: keywords }));
  if (author) nodes.push(React.createElement('meta', { key: 'author', name: 'author', content: author }));
  if (url) nodes.push(React.createElement('link', { key: 'canonical', rel: 'canonical', href: url }));
  if (image) nodes.push(React.createElement('meta', { key: 'og:image', property: 'og:image', content: image } as any));
  nodes.push(React.createElement('meta', { key: 'og:title', property: 'og:title', content: title } as any));
  nodes.push(React.createElement('meta', { key: 'og:description', property: 'og:description', content: description } as any));
  nodes.push(React.createElement('meta', { key: 'og:type', property: 'og:type', content: 'website' } as any));
  if (url) nodes.push(React.createElement('meta', { key: 'og:url', property: 'og:url', content: url } as any));

  return React.createElement(React.Fragment, null, ...nodes);
}