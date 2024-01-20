import { Helmet } from "react-helmet-async";
const SEO = ({
  title,
  description,
  keywords,
  author,
  OGimage,
  OGUrl,
  TwTitle,
  TwDesc,
  TwImage,
  TwCard,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OGimage} />
      <meta property="og:url" content={OGUrl} />
      <meta name="twitter:title" content={TwTitle} />
      <meta name="twitter:description" content={TwDesc} />
      <meta name="twitter:image" content={TwImage} />
      <meta name="twitter:card" content={TwCard} />
    </Helmet>
  );
};

export default SEO;
