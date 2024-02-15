import React from "react";

import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="contact__container__info">
      <div className="contact__container__info__item">
        <Image
          src="/assets/icon/location-icon3.png"
          alt="location"
          width={35}
          height={45}
          className="contact__container__info__item__img"
        />
        <p className="contact__container__info__item__text">Baku,Azerbaijan</p>
      </div>
      <div className="contact__container__info__item">
        <Image
          src="/assets/icon/phone-icon.png"
          alt="phone"
          width={35}
          height={40}
          className="contact__container__info__item__img"
        />
        <p className="contact__container__info__item__text">
          Phone: +994508708035
        </p>
      </div>
      <div className="contact__container__info__item">
        <Image
          src="/assets/icon/mail-icon.jpg"
          alt="mail"
          width={35}
          height={40}
          className="contact__container__info__item__img"
        />
        <p className="contact__container__info__item__text">
          Mail: amirmammado@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
