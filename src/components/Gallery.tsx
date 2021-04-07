// import { useRouter } from "next/router";
import { PhotoInfoFragment } from "../graphql-operations";
import Slide from "./Slide";

type Props = {
  photos: PhotoInfoFragment[];
};

const Gallery: React.FC<Props> = ({ photos }) => {
  // const router = useRouter();

  return (
    <>
      <div className="m-8 px-12 grid grid-cols-3 grid-flow-row-dense gap-x-4 gap-y-16 justify-evenly justify-items-center">
        {photos.map((photo, idx) => (
          <div key={photo.sku} className="container">
            <Slide photo={photo} priority={idx < 12} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
