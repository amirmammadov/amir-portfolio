import React from "react";

import Image from "next/image";
import Link from "next/link";

interface IExperience {
  id: number;
  place: string;
  job: string;
  date: string;
  image: string;
  link: string;
  desc: string;
}

const ExperienceItem = ({ experience }: { experience: IExperience[] }) => {
  return (
    <div className="experience__content">
      {experience.map((work) => (
        <div key={work.id} className="experience__content__item">
          <div className="experience__content__item__img">
            <Image
              src={`/assets/${work.image}`}
              alt={work.place}
              width={500}
              height={500}
              className="image__item"
            />
          </div>
          <div className="experience__content__item__info">
            <div className="experience__content__item__info__header">
              <div className="experience__content__item__info__header__title">
                {work.job}
              </div>
              <div className="experience__content__item__info__header__place">
                {work.place}
              </div>
              <span className="experience__content__item__info__header__date">
                {work.date}
              </span>
            </div>
            <div className="experience__content__item__info__desc">
              {work.desc}
            </div>
            <Link
              href={work.link}
              target="_blank"
              className="experience__content__item__info__link"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceItem;
