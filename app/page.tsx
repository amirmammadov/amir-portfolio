import Link from "next/link";
import Image from "next/image";

import "@/sass/layout/_hero.scss";
import "@/sass/layout/_education.scss";
import "@/sass/layout/_popular.scss";
import "@/sass/layout/_skills.scss";
import "@/sass/layout/_experience.scss";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SkillsSlider from "@/components/SkillsSlider/SkillsSlider";

import { projects } from "@/data/projectsData";
import { education } from "@/data/educationData";
import { experience } from "@/data/experienceData";

import PopularItem from "@/components/PopularItem/PopularItem";
import EducationItem from "@/components/EducationItem/EducationItem";
import ExperienceItem from "@/components/ExperienceItem/ExperienceItem";

import { social } from "@/data/socialData";

interface ISocial {
  id: number;
  name: string;
  link: string;
  image: string;
  main: boolean;
}

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h2 className="hero__text__name">Amir Mammadov</h2>
          <h2 className="hero__text__job">web developer</h2>
          <p className="hero__text__desc">
            {"I've"} explored web dev for 2 years, excelling in MERN & Next.js.
          </p>
          <div className="hero__text__contact">
            <Link href="/contact" className="hero__text__contact__btn">
              Contact
            </Link>
          </div>
          <div className="hero__text__social">
            {social.map((socialItem: ISocial) => {
              if (socialItem.main) {
                return (
                  <Link
                    key={socialItem.id}
                    target="_blank"
                    href={socialItem.link}
                    className="hero__text__social__btn"
                  >
                    <Image
                      src={`/assets/${socialItem.image}`}
                      alt="linkedin"
                      width={25}
                      height={25}
                    />
                    {socialItem.name}
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image__cover">
            <Link href="/projects" className="hero__image__cover__js">
              JS
            </Link>
          </div>
        </div>
      </section>
      <section className="experience">
        <SectionTitle text="Experience" />
        <ExperienceItem experience={experience} />
      </section>
      <section className="education">
        <SectionTitle text="Education" />
        <EducationItem education={education} />
      </section>
      <section className="skills">
        <SectionTitle text="Skills" />
        <SkillsSlider />
      </section>
      <section className="popular__projects">
        <SectionTitle text="Top Projects" />
        <PopularItem projects={projects} />
      </section>
    </>
  );
};

export default Home;
