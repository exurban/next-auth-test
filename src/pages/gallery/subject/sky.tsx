import { GetStaticProps } from "next";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import { AllPhotosOfSubjectDocument, AllPhotosOfSubjectInput } from "../../../graphql-operations";
import { NextSeo } from "next-seo";

import Gallery from "../../../components/Gallery";

const input = { name: "sky" } as AllPhotosOfSubjectInput;

const SkyGallery: React.FC = () => {
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
      <Gallery input={input} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPhotosOfSubjectDocument,
    variables: { input: input }
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  });
};

export default SkyGallery;
