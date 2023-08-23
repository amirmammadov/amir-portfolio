import SectionTitle from "@/components/SectionTitle/SectionTitle";

import "@/sass/pages/_gallery.scss";

import Image from "next/image";

const imageStyle = {
  maxWidth: "100%",
};

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle text="From My Camera" />
      <div className="gallery__container">
        <div className="gallery__container__column">
          <Image
            src="/assets/g1.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g2.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g3.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
        </div>
        <div className="gallery__container__column">
          <Image
            src="/assets/g11.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g8.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g13.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
        </div>
        <div className="gallery__container__column">
          <Image
            src="/assets/g7.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g23.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g9.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
        </div>
        <div className="gallery__container__column">
          <Image
            src="/assets/g12.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g24.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
          <Image
            src="/assets/g21.jpg"
            alt="gallery"
            width={300}
            height={450}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="gallery__container__column__img"
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
