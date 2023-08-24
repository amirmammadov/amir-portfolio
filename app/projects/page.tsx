"use client";

import { useState } from "react";

import "@/sass/pages/_projects.scss";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ProjectItems from "@/components/ProjectItem/ProjectItem";
import ProjectButtons from "@/components/ProjectButton/ProjectButton";

import { projects } from "@/data/projectsData";
const allCategories = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Projects = () => {
  const [projectItems, setProjectItems] = useState(projects);
  const [categories, setCategories] = useState(allCategories);

  const filterProjects = (category: string) => {
    if (category === "all") {
      setProjectItems(projects);
      return;
    }

    const filteredProjects = projects.filter(
      (project) => project.category === category,
    );
    setProjectItems(filteredProjects);
  };

  return (
    <section className="projects">
      <SectionTitle text="My Projects" />
      <div className="projects__container">
        <ProjectButtons
          categories={categories}
          filterProjects={filterProjects}
        />
        <ProjectItems projects={projectItems} />
      </div>
    </section>
  );
};

export default Projects;
