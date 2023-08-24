import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GalleryItem from "@/components/GalleryItem/GalleryItem";

import { galleryData } from "@/data/galleryData";

import "@/sass/pages/_gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle text="From My Camera" />
      <GalleryItem galleries={galleryData} />
    </section>
  );
};

export default Gallery;
