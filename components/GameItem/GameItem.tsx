import Image from "next/image";
import Link from "next/link";

const gameImageWidth = 300;
const gameImageHeight = 250;

interface IGames {
  id: number;
  name: string;
  url: string;
  image: string;
}

const GameItem = ({ games }: { games: IGames[] }) => {
  return (
    <div className="games__container__list">
      {games.map((game) => {
        return (
          <div key={game.id} className="games__container__list__item">
            <Image
              src={`/assets/${game.image}`}
              alt="game"
              //   layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={gameImageWidth}
              height={gameImageHeight}
              className="games__container__list__item__img"
            />
            <Link
              target="_blank"
              href={`${game.url}`}
              className="games__container__list__item__overlay"
            >
              <h2 className="games__container__list__item__overlay__text">
                {game.name}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default GameItem;
