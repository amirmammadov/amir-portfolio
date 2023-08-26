import Link from "next/link";
import Image from "next/image";

interface IProject {
  id: number;
  name: string;
  link: string;
  image: string;
  techs: string;
  category: string;
  popular: boolean;
}

const PopularItem = ({ projects }: { projects: IProject[] }) => {
  return (
    <div className="popular__projects__content">
      {projects.map((project) => {
        if (project.popular === true) {
          return (
            <div key={project.id} className="popular__projects__content__item">
              <Image
                src={`/assets/${project.image}`}
                alt="project"
                width={400}
                height={300}
                className="popular__projects__content__item__img"
              />
              <div className="popular__projects__content__item__info">
                <h2 className="popular__projects__content__item__info__heading">
                  {project.name}
                </h2>
                <p className="popular__projects__content__item__info__text">
                  Built by using {project.category} tech
                </p>
              </div>
              <div className="popular__projects__content__item__overflow">
                <h2 className="popular__projects__content__item__overflow__heading">
                  Techs which were used
                </h2>
                <p className="popular__projects__content__item__overflow__list">
                  {project.techs}
                </p>
                <p className="popular__projects__content__item__overflow__desc">
                  Aim is to create {project.category} app
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="popular__projects__content__item__overflow__btn"
                >
                  Go There
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PopularItem;
