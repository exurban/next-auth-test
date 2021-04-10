import { PhotoInfoFragment } from "../graphql-operations";
import Image from "next/image";
import useWindowDimensions from "../utils/useWindowDimensions";
import { isMobile } from "react-device-detect";

type Props = {
  photo: PhotoInfoFragment;
  idx: number;
};

const CarouselItem: React.FC<Props> = ({ photo, idx }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const { height } = useWindowDimensions();

  return (
    <>
      <div
        className="rounded-lg"
        data-value={idx}
        key={idx}
        style={{ height: isMobile ? `${height}px` : `${height - 160}px` }}
      >
        <Image
          className="rounded-lg"
          alt={photo.images?.[0].altText}
          src={photo.images?.[0].imageUrl}
          layout="fill"
          objectFit="contain"
          quality={80}
        />
      </div>
    </>
  );
};

export default CarouselItem;
