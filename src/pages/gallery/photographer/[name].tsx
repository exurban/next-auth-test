import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import {
  AllPhotosByPhotographerDocument,
  AllPhotosByPhotographerInput
} from "../../../graphql-operations";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import Gallery from "../../../components/Gallery";

const PhotographerGallery: React.FC = () => {
  const router = useRouter();

  // * get tag from router
  const { name } = router.query;
  let searchString;
  if (name) {
    searchString = decodeURIComponent(name as string);
  }

  const input = { name: searchString } as AllPhotosByPhotographerInput;

  const { loading, error, data } = useQuery(AllPhotosByPhotographerDocument, {
    variables: { input: input }
  });

  if (error) return <ErrorMessage message={`Error loading photos at location: ${name}.`} />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { photos } = data.allPhotosByPhotographer;

  return (
    <>
      <Gallery photos={photos} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const photographers = ["Scott Gibbs", "Boyd Gibbs"];
  const paths = photographers.map(pg => ({ params: { name: pg.toLowerCase() } }));
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.name !== "string") {
    return;
  }
  const input = { name: params.name } as AllPhotosByPhotographerInput;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPhotosByPhotographerDocument,
    variables: { input: input }
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  });
};

export default PhotographerGallery;
