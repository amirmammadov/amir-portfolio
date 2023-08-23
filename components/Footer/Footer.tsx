import Image from "next/image";
import Link from "next/link";

import "@/sass/layout/_footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__content">
        <div className="footer__content__links">
          <Link href="#">
            <Image src="/assets/fb.png" alt="facebook" width={25} height={25} />
          </Link>
          <Link href="#">
            <Image src="/assets/lk.png" alt="linkedin" width={25} height={25} />
          </Link>
          <Link href="#">
            <Image src="/assets/gh.png" alt="github" width={25} height={25} />
          </Link>
          <Link href="#">
            <Image
              src="/assets/ins.png"
              alt="instagram"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="footer__content__text">
          Copyright © 2023 Mammadov Amir | All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
