"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const gameImageWidth = 300;
const gameImageHeight = 250;

interface IGames {
  id: number;
  name: string;
  url: string;
  image: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

const GameItem = ({ games }: { games: IGames[] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="games__container__list"
    >
      {games.map((game) => {
        return (
          <motion.div
            variants={item}
            key={game.id}
            whileHover={{ scale: 0.9 }}
            className="games__container__list__item"
          >
            <Image
              src={`/assets/${game.image}`}
              alt="game"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href={`${game.url}`}
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                {game.name}
              </h2>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default GameItem;
