"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const imageStyle = {
  maxWidth: "100%",
  minWidth: 300,
};

interface IGalleries {
  id: number;
  image: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerDirection: -1,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const GalleryItem = ({ galleries }: { galleries: IGalleries[] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="gallery__container"
    >
      {galleries.map((gallery) => {
        return (
          <motion.div key={gallery.id} variants={images}>
            <Image
              src={`/assets/${gallery.image}`}
              alt="gallery"
              width={300}
              height={350}
              className="gallery__container__item"
              style={imageStyle}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default GalleryItem;
