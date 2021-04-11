import { Dispatch, SetStateAction } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { isMobile } from "react-device-detect";

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  items: CarouselItem[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

const renderPrevButton = () => {
  return (
    <button className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-md">
      <div className="flex flex-row px-4 py-2">
        <p>Prev</p>
      </div>
    </button>
  );
};

const renderNextButton = () => {
  return (
    <button className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-md">
      <div className="flex flex-row px-4 py-2">
        <p>Next</p>
      </div>
    </button>
  );
};

const Carousel: React.FC<Props> = ({ items, activeIndex, setActiveIndex }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onSlideChanged = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <>
      <AliceCarousel
        disableButtonsControls={isMobile}
        disableDotsControls
        infinite
        animationType="fadeout"
        animationDuration={400}
        animationEasingFunction="ease-in-out"
        mouseTracking
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChanged}
      />
    </>
  );
};

export default Carousel;
