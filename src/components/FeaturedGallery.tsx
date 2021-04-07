// import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { AllFeaturedPhotosDocument } from "../graphql-operations";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Gallery from "./Gallery";

const FeaturedGallery: React.FC = () => {
  // const router = useRouter();

  const { loading, error, data } = useQuery(AllFeaturedPhotosDocument);

  if (error) return <ErrorMessage message="Error loading photos." />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { total, photos } = data.allFeaturedPhotos;

  console.log(total);

  return <Gallery photos={photos} />;
};

export default FeaturedGallery;
