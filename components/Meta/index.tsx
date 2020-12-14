import Head from 'next/head';

const Meta = ({ title, locale, meta, link }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:locale" content={locale} />
    {meta.map((info, i) => (
      <meta key={i} {...info} />
    ))}
    {link.map((info, i) => (
      <meta key={i} {...info} />
    ))}
  </Head>
);

export default Meta;
