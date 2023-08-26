import Image from "next/image";
import Link from "next/link";

import "@/sass/layout/_footer.scss";

import { social } from "@/data/socialData";

interface ISocial {
  id: number;
  name: string;
  link: string;
  image: string;
  main: boolean;
}

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__content">
        <div className="footer__content__links">
          {social.map((socialItem: ISocial) => {
            return (
              <Link key={socialItem.id} target="_blank" href={socialItem.link}>
                <Image
                  src={`/assets/${socialItem.image}`}
                  alt="instagram"
                  width={25}
                  height={25}
                />
              </Link>
            );
          })}
        </div>
        <div className="footer__content__text">
          Copyright © 2023 Mammadov Amir | All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
