"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

interface IProject {
  id: number;
  name: string;
  link: string;
  image: string;
  techs: string;
  category: string;
}

const ProjectItems = ({ projects }: { projects: IProject[] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="projects__container__items"
    >
      {projects.map((project: IProject) => {
        return (
          <motion.div
            variants={item}
            className="projects__container__items__item"
            whileHover={{ scale: 0.95 }}
            key={project.id}
          >
            <Image
              src={`/assets/${project.image}`}
              alt="project"
              width={300}
              height={200}
              objectFit="cover"
              objectPosition="center"
              className="projects__container__items__item__img"
            />
            <div className="projects__container__items__item__info">
              <div className="projects__container__items__item__info__name">
                {project.name}
              </div>
              <div className="projects__container__items__item__info__techs">
                {project.techs}
              </div>
              <Link
                target="_blank"
                href={project.link}
                className="projects__container__items__item__info__btn"
              >
                Go There
              </Link>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProjectItems;
