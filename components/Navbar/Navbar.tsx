"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "@/sass/layout/_navigation.scss";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleNavList = () => {
    setIsMenuActive((prevValue) => !prevValue);
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link href="/" className="nav__logo__link">
          {`{amir}`}
        </Link>
      </div>
      <div className="nav__list">
        <div className="nav__item">
          <Link href="/projects" className="nav__link">
            Projects
          </Link>
        </div>
        <div className="nav__item dropdown">
          <div className="nav__link dropdown__btn">More</div>
          <div className="dropdown__content">
            <div className="nav__item">
              <Link href="/gallery" className="nav__link">
                <Image
                  src="/assets/icon/gallery.png"
                  alt="gallery"
                  width={20}
                  height={20}
                />
                Gallery
              </Link>
            </div>
            <div className="nav__item">
              <Link href="/games" className="nav__link">
                <Image
                  src="/assets/icon/game.png"
                  alt="game"
                  width={20}
                  height={20}
                />
                Games
              </Link>
            </div>
          </div>
        </div>
        <div className="nav__item" style={{ paddingRight: 0 }}>
          <Link href="/contact" className="nav__link">
            Contact
          </Link>
        </div>
      </div>
      <div
        className={`${
          isMenuActive
            ? "nav__list--responsive active"
            : "nav__list--responsive"
        }`}
      >
        <button
          className="nav__item"
          onClick={() => setIsMenuActive((prevValue) => !prevValue)}
        >
          <Link href="/gallery" className="nav__link">
            Gallery
          </Link>
        </button>
        <button
          className="nav__item"
          onClick={() => setIsMenuActive((prevValue) => !prevValue)}
        >
          <Link href="/games" className="nav__link">
            Games
          </Link>
        </button>
        <button
          className="nav__item"
          onClick={() => setIsMenuActive((prevValue) => !prevValue)}
        >
          <Link href="/projects" className="nav__link">
            Projects
          </Link>
        </button>
        <button
          className="nav__item"
          onClick={() => setIsMenuActive((prevValue) => !prevValue)}
        >
          <Link href="/contact" className="nav__link">
            Contact
          </Link>
        </button>
      </div>
      <div
        className={`${isMenuActive ? "nav__menu clicked" : "nav__menu"}`}
        onClick={handleNavList}
      >
        <span className="nav__menu__line" />
        <span className="nav__menu__line" />
        <span className="nav__menu__line" />
      </div>
    </nav>
  );
};

export default Navbar;
