import Image from "next/image";

const imageStyle = {
  maxWidth: "100%",
  minWidth: 300,
};

interface IGalleries {
  id: number;
  image: string;
}

const GalleryItem = ({ galleries }: { galleries: IGalleries[] }) => {
  return (
    <div className="gallery__container">
      {galleries.map((gallery) => {
        return (
          <Image
            key={gallery.id}
            src={`/assets/${gallery.image}`}
            alt="gallery"
            width={300}
            height={350}
            className="gallery__container__item"
            style={imageStyle}
          />
        );
      })}
    </div>
  );
};

export default GalleryItem;
