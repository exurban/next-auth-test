import { GetStaticProps } from "next";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";
import { AllFeaturedPhotosDocument } from "../../graphql-operations";

import FeaturedGallery from "../../components/FeaturedGallery";

const FeatureGallery: React.FC = () => {
  return (
    <>
      <FeaturedGallery />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllFeaturedPhotosDocument
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  });
};

export default FeatureGallery;
