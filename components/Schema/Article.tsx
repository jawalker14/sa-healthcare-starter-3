import React from 'react';

interface ArticleProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, datePublished, author, url }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    url: url,
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default Article;