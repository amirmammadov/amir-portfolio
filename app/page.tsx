import Link from "next/link";
import Image from "next/image";

import "@/sass/layout/_hero.scss";
import "@/sass/layout/_education.scss";
import "@/sass/layout/_popular.scss";

import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SkillsSlider from "@/components/SkillsSlider/SkillsSlider";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h2 className="hero__text__name">Amir Mammadov</h2>
          <h2 className="hero__text__job">web developer</h2>
          <p className="hero__text__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            animi.
          </p>
          <div className="hero__text__contact">
            <Link href="#" className="hero__text__contact__btn">
              Contact
            </Link>
          </div>
          <div className="hero__text__social">
            <Link href="#" className="hero__text__social__btn">
              <Image
                src="/assets/fb.png"
                alt="facebook"
                width={20}
                height={20}
              />
              Facebook
            </Link>
            <Link href="#" className="hero__text__social__btn">
              <Image
                src="/assets/lk.png"
                alt="linkedin"
                width={20}
                height={20}
              />
              Linkedin
            </Link>
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
      <section className="education">
        <SectionTitle text="Education" />
        <div className="education__content">
          <div className="education__content__item">
            <div className="education__content__item__logo">
              <Image
                src="/assets/adnsu.png"
                alt="uni"
                width={655}
                height={340}
                className="education__content__item__logo__img"
              />
            </div>
            <div className="education__content__item__info">
              <h3 className="education__degree">Bachelor Degree</h3>
              <Link
                href="http://asoiu.edu.az/"
                target="_blank"
                className="education__name"
              >
                Azerbaijan State Oil and Industry University
              </Link>
              <h4 className="education__field">Computer Engineering</h4>
              <p className="education__gpa">GPA: 85</p>
            </div>
          </div>
          <div className="education__content__item">
            <div className="education__content__item__logo">
              <Image
                src="/assets/course.jpg"
                alt="course"
                width={655}
                height={340}
                className="education__content__item__logo__img"
              />
            </div>
            <div className="education__content__item__info">
              <Link
                href="https://coders.edu.az/"
                target="_blank"
                className="education__name"
              >
                Coders Azerbaijan
              </Link>
              <h4 className="education__field">Advanced Frontend</h4>
              <p className="education__gpa">GPA: 87</p>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <SectionTitle text="Skills" />
        <SkillsSlider />
      </section>
      <section className="popular__projects">
        <SectionTitle text="Popular Projects" />
        <div className="popular__projects__content">
          <div className="popular__projects__content__item">
            <Image
              src="/assets/proj-quiz.png"
              alt="project"
              width={400}
              height={300}
              className="popular__projects__content__item__img"
            />
            <div className="popular__projects__content__item__info">
              <h2 className="popular__projects__content__item__info__heading">
                Quiz App
              </h2>
              <p className="popular__projects__content__item__info__text">
                Built by using MERN tech
              </p>
            </div>
            <div className="popular__projects__content__item__overflow">
              <h2 className="popular__projects__content__item__overflow__heading">
                Techs which were used
              </h2>
              <p className="popular__projects__content__item__overflow__list">
                React, NodeJs, ExpressJs, MongoDB, Mongoose
              </p>
              <p className="popular__projects__content__item__overflow__desc">
                Aim is to create fullstack app
              </p>
              <Link
                href="https://mern-quiz-app-git-main-amirmammadov.vercel.app"
                target="_blank"
                className="popular__projects__content__item__overflow__btn"
              >
                Go There
              </Link>
            </div>
          </div>
          <div className="popular__projects__content__item">
            <Image
              src="/assets/proj-social.png"
              alt="project"
              width={400}
              height={300}
              className="popular__projects__content__item__img"
            />
            <div className="popular__projects__content__item__info">
              <h2 className="popular__projects__content__item__info__heading">
                Social Media App
              </h2>
              <p className="popular__projects__content__item__info__text">
                Built by using MERN tech
              </p>
            </div>
            <div className="popular__projects__content__item__overflow">
              <h2 className="popular__projects__content__item__overflow__heading">
                Techs which were used
              </h2>
              <p className="popular__projects__content__item__overflow__list">
                React, NodeJs, ExpressJs, MongoDB, Mongoose
              </p>
              <p className="popular__projects__content__item__overflow__desc">
                Aim is to create fullstack app
              </p>
              <Link
                href="https://social-media-client-eta.vercel.app"
                target="_blank"
                className="popular__projects__content__item__overflow__btn"
              >
                Go There
              </Link>
            </div>
          </div>
          <div className="popular__projects__content__item">
            <Image
              src="/assets/proj-dashboard.png"
              alt="project"
              width={400}
              height={300}
              className="popular__projects__content__item__img"
            />
            <div className="popular__projects__content__item__info">
              <h2 className="popular__projects__content__item__info__heading">
                Frontend App
              </h2>
              <p className="popular__projects__content__item__info__text">
                Built by using React and TS
              </p>
            </div>
            <div className="popular__projects__content__item__overflow">
              <h2 className="popular__projects__content__item__overflow__heading">
                Techs which were used
              </h2>
              <p className="popular__projects__content__item__overflow__list">
                React, TypeScript, Redux, Formik and Yup
              </p>
              <p className="popular__projects__content__item__overflow__desc">
                Aim is to create frontend app
              </p>
              <Link
                href="https://admin-dashboard-topaz-six.vercel.app"
                target="_blank"
                className="popular__projects__content__item__overflow__btn"
              >
                Go There
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
