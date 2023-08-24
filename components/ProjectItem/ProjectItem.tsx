import Link from "next/link";
import Image from "next/image";

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
    <div className="projects__container__items">
      {projects.map((project: IProject) => {
        return (
          <div className="projects__container__items__item" key={project.id}>
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
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItems;
