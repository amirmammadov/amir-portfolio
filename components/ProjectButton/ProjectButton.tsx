"use client";

interface IProjectButtons {
  categories: string[];
  filterProjects: (category: string) => void;
}

const ProjectButtons = ({ categories, filterProjects }: IProjectButtons) => {
  return (
    <div className="projects__container__btns">
      {categories.map((category, index: number) => {
        return (
          <button
            key={index}
            onClick={() => filterProjects(category)}
            className="projects__container__btns__btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectButtons;
