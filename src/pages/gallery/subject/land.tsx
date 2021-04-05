import { NextSeo } from "next-seo";

const LandGallery: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Gibbs Photography"
        description="Gibbs Photography | Nature & Landscape Photography"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.gibbs-photography.com",
          site_name: "Gibbs Photography",
          title: "Gibbs Photography",
          description: `Gibbs Photography | Nature & Landscape Photography`
        }}
        twitter={{
          handle: "@gibbs_photog",
          site: "https://gibbs-photography.com",
          cardType: "summary_large_image"
        }}
      />
    </>
  );
};

export default LandGallery;
