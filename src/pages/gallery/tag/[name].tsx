import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import { AllPhotosWithTagDocument, AllPhotosWithTagInput } from "../../../graphql-operations";
import Loader from "../../../components/Loader";
import ErrorMessage from "../../../components/ErrorMessage";
import Gallery from "../../../components/Gallery";

const TagGallery: React.FC = () => {
  const router = useRouter();

  // * get tag from router
  const { name } = router.query;
  let searchString;
  if (name) {
    searchString = decodeURIComponent(name as string);
  }

  const input = { name: searchString } as AllPhotosWithTagInput;

  const { loading, error, data } = useQuery(AllPhotosWithTagDocument, {
    variables: { input: input }
  });

  if (error) return <ErrorMessage message={`Error loading photos with tag: ${name}.`} />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { photos } = data.allPhotosWithTag;

  return (
    <>
      <Gallery photos={photos} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = ["autumn", "waterfall", "mountains", "winter", "abstract", "spring", "morning"];
  const paths = tags.map(t => ({ params: { name: t } }));
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.name !== "string") {
    return;
  }
  const input = { name: params.name } as AllPhotosWithTagInput;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPhotosWithTagDocument,
    variables: { input: input }
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  });
};

export default TagGallery;
