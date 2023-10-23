"use client";

import { useState, useEffect } from "react";

import { sendContactForm } from "@/lib/api";

import "@/sass/pages/_contact.scss";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { locationOfCity } from "@/constant/location";

import Image from "next/image";

export interface StateValues {
  name: string;
  mail: string;
  subject: string;
  message: string;
}

const initialValues = { name: "", mail: "", subject: "", message: "" };

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<StateValues>(initialValues);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
    if (serverError !== "") {
      setTimeout(() => {
        setServerError("");
      }, 2000);
    }
  }, [success, error, serverError]);

  const handleChange = ({
    target,
  }: {
    target: { name: string; value: string };
  }) => {
    setContactInfo((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, mail, subject, message } = contactInfo;

    if (!name || !mail || !subject || !message) {
      setError(true);
      return;
    }

    try {
      setIsLoading(true);
      await sendContactForm(contactInfo);
      setContactInfo(initialValues);
      setSuccess(true);
      setIsLoading(false);
    } catch (error: any) {
      setServerError(error.message);
      setContactInfo(initialValues);
      setIsLoading(false);
    }
  };

  return (
    <section className="contact">
      <SectionTitle text="Contact Me" />
      <div className="contact__img">
        <iframe
          src={locationOfCity}
          loading="lazy"
          className="contact__img__iframe"
        ></iframe>
      </div>
      <div className="contact__container">
        <div className="contact__container__info">
          <div className="contact__container__info__item">
            <Image
              src="/assets/icon/location-icon3.png"
              alt="location"
              width={30}
              height={40}
              className="contact__container__info__item__img"
            />
            <p className="contact__container__info__item__text">
              Baku,Azerbaijan
            </p>
          </div>
          <div className="contact__container__info__item">
            <Image
              src="/assets/icon/phone-icon.png"
              alt="phone"
              width={30}
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
              width={30}
              height={40}
              className="contact__container__info__item__img"
            />
            <p className="contact__container__info__item__text">
              Mail: amirmammado@gmail.com
            </p>
          </div>
        </div>
        <form className="contact__container__form">
          <div className="contact__container__form__title">
            Let us get in touch. Send me a message:
          </div>
          <div className="contact__container__form__item">
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={handleChange}
              placeholder="Name"
              className="contact__container__form__item__input"
            />
            <input
              type="mail"
              name="mail"
              value={contactInfo.mail}
              onChange={handleChange}
              placeholder="Mail"
              className="contact__container__form__item__input"
            />
            <input
              type="text"
              name="subject"
              value={contactInfo.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="contact__container__form__item__input"
            />
            <input
              type="text"
              name="message"
              value={contactInfo.message}
              onChange={handleChange}
              placeholder="Message"
              className="contact__container__form__item__input"
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`contact__container__form__item__btn ${
                isLoading && "form__btn--disabled"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      {success && (
        <div className="pop-up pop-up__success">
          <h2 className="pop-up__text__success">
            Message was successfully sent!
          </h2>
        </div>
      )}
      {error && (
        <div className="pop-up pop-up__error">
          <h2 className="pop-up__text__error">Please, fill all the fields!</h2>
        </div>
      )}
      {serverError !== "" && (
        <div className="pop-up pop-up__error">
          <h2 className="pop-up__text__error">{serverError}</h2>
        </div>
      )}
    </section>
  );
};

export default Contact;
