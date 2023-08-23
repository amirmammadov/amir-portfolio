import SectionTitle from "@/components/SectionTitle/SectionTitle";

import Image from "next/image";
import Link from "next/link";

import "@/sass/pages/_games.scss";

const gameImageWidth = 450;
const gameImageHeight = 300;

const Games = () => {
  return (
    <section className="games__container">
      <SectionTitle text="Have a fun" />
      <div className="games__container__list">
        <div className="games__container__list__column">
          <div className="games__container__list__item">
            <Image
              src="/assets/games2.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-connect-four-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Connect Four Game
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/games3.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-frogger-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Frogger Game
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/games5.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-memory-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Memory Game
              </h2>
            </Link>
          </div>
        </div>
        <div className="games__container__list__column">
          <div className="games__container__list__item">
            <Image
              src="/assets/games4.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-guess-number-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Guess Number Game
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/games1.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-breakout-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Breakout Game
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/games7.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-quiz-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Quiz Game
              </h2>
            </Link>
          </div>
        </div>
        <div className="games__container__list__column">
          <div className="games__container__list__item">
            <Image
              src="/assets/games6.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-pig-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Pig Game
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/games9.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-space-invaders-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Space Invaders Game
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/games16.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-tic-tac-toe-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Tic Tac Toe Game
              </h2>
            </Link>
          </div>
        </div>
        <div className="games__container__list__column">
          <div className="games__container__list__item">
            <Image
              src="/assets/games17.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-whack-mole-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Whack a Mole Game
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/proj-quiz.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mern-quiz-app-git-main-amirmammadov.vercel.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Quiz Game 2
              </h2>
            </Link>
          </div>
          <div className="games__container__list__item">
            <Image
              src="/assets/games8.png"
              alt="game"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href="https://mammadov-snake-game.netlify.app"
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                Snake Game
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
