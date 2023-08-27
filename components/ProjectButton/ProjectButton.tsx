"use client";

import { motion } from "framer-motion";

interface IProjectButtons {
  categories: string[];
  filterProjects: (category: string) => void;
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

const ProjectButtons = ({ categories, filterProjects }: IProjectButtons) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="projects__container__btns"
    >
      {categories.map((category, index: number) => {
        return (
          <motion.button
            variants={item}
            whileFocus={{ scale: 0.9 }}
            key={index}
            onClick={() => filterProjects(category)}
            className="projects__container__btns__btn"
          >
            {category}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ProjectButtons;
