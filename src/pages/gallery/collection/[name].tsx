import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import {
  AllPhotosInCollectionDocument,
  AllPhotosInCollectionInput
} from "../../../graphql-operations";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import Gallery from "../../../components/Gallery";

const CollectionGallery: React.FC = () => {
  const router = useRouter();

  // * get tag from router
  const { name } = router.query;
  let searchString;
  if (name) {
    searchString = decodeURIComponent(name as string);
  }

  const input = { name: searchString } as AllPhotosInCollectionInput;

  const { loading, error, data } = useQuery(AllPhotosInCollectionDocument, {
    variables: { input: input }
  });

  if (error) return <ErrorMessage message={`Error loading photos at location: ${name}.`} />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { photos } = data.allPhotosInCollection;

  return (
    <>
      <Gallery photos={photos} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const collections = ["bears"];
  const paths = collections.map(coll => ({ params: { name: coll.toLowerCase() } }));
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.name !== "string") {
    return;
  }
  const input = { name: params.name } as AllPhotosInCollectionInput;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPhotosInCollectionDocument,
    variables: { input: input }
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  });
};

export default CollectionGallery;
