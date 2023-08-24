import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GameItem from "@/components/GameItem/GameItem";

import { gamesData } from "@/data/gamesData";

import "@/sass/pages/_games.scss";

const Games = () => {
  return (
    <section className="games__container">
      <SectionTitle text="Have a fun" />
      <GameItem games={gamesData} />
    </section>
  );
};

export default Games;
