import React from "react";
import "./ContactPanel.scss";
import { About } from "../Image/Projects_Description.js";

export default function ContactPanel({ language }) {
  const message = !language
    ? About.About_Me.contact_message_spanish
    : About.About_Me.contact_message_english;

  const currentMargin = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--root-margin");

  const observerInformation = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show_contact", entry.isIntersecting);
      });
    },
    {
      rootMargin: currentMargin,
    }
  );

  const contactMessage = document.querySelector(".contact_message");
  if (contactMessage) {
    contactMessage.classList.add("active_contact");
    observerInformation.observe(contactMessage);
  }

  const containerContacts = document.querySelector(".container_contacts");
  if (containerContacts) {
    containerContacts.classList.add("active_contact");
    observerInformation.observe(containerContacts);
  }

  const contactForm = document.querySelector(".contact_form");
  if (contactForm) {
    contactForm.classList.add("active_contact");
    observerInformation.observe(contactForm);
  }

  const contactFooter = document.querySelector(".contact_footer");
  if (contactFooter) {
    contactFooter.classList.add("active_contact");
    observerInformation.observe(contactFooter);
  }

  return (
    <div className="contact_container">
      <h2 className="contact_title">{!language ? "Contacto" : "Contact"}</h2>

      <div style={{ "--translate-contant": "80%" }} className="contact_message">
        {message &&
          message.map((singleMessage, index) => (
            <p key={index}>{singleMessage}</p>
          ))}
      </div>

      <div
        style={{ "--translate-contant": "-80%" }}
        className="container_contacts"
      >
        <div className="container_single_contact">
          <span className="title">{!language ? "Locación" : "Location"}</span>
          <div className="content">Colombia / Cundinamarca</div>
        </div>
        <div className="container_single_contact">
          <span className="title">Mail</span>
          <div className="content">drawingsdf@gmail.com</div>
        </div>
        <div className="container_single_contact">
          <span className="title">{!language ? "Telefono" : "Phone"}</span>
          <div className="content">+57 320 207 4828</div>
        </div>
      </div>

      <form
        action="https://formsubmit.co/drawingsdf@gmail.com"
        method="POST"
        className="contact_form"
        style={{ "--translate-contant": "80%" }}
      >
        <span className="form_message">
          {!language ? "Enviame un Email" : "Send me an Email"}
        </span>
        <label htmlFor="name"></label>
        <input
          required={true}
          name="name"
          placeholder={!language ? "Nombre" : "Name"}
          type="text"
          className="contact_input"
        />
        <label htmlFor="email"></label>
        <input
          required={true}
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          name="email"
          placeholder="Email"
          type="mail"
          className="contact_input"
        />
        <label htmlFor="subject"></label>
        <input
          name="subject"
          placeholder={!language ? "Asunto" : "Subject"}
          type="text"
          className="contact_input"
        />

        <label htmlFor="description"></label>
        <textarea
          required={true}
          className="contact_textarea"
          name="description"
          placeholder={!language ? "Descripción" : "Description"}
        ></textarea>
        <div className="container_button">
          <input
            type="submit"
            value={!language ? "Enviar" : "Submit"}
            className="contact_button"
          ></input>
        </div>
      </form>

      <footer
        style={{ "--translate-contant": "-80%" }}
        className="contact_footer"
      >
        <a href="https://github.com/DF27ARTS">
          <div className="single_contact_icon">
            <img
              src={About.GitHub}
              alt="github icon"
              className="contact_icons"
            />
            <span className="icon_contact_title">GitHub</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/diego-fernando-rojas-carrillo-full-stack-developer/">
          <div className="single_contact_icon">
            <img
              src={About.LinkedIn}
              alt="linkedin icon"
              className="contact_icons"
            />
            <span className="icon_contact_title">LinkedIn</span>
          </div>
        </a>

        <a href="https://twitter.com/_DF_Fernando">
          <div className="single_contact_icon">
            <img
              src={About.Twitter}
              alt="linkedin icon"
              className="twitter_icons"
            />
            <span className="icon_contact_title">Twitter</span>
          </div>
        </a>

        <a href="https://torre.co/@fernando_rc?r=kZjElFcd">
          <div className="single_contact_icon">
            <div className="contact_icons_torre">
              <img src={About.Picture} alt="Torre icon" />
            </div>
            <span className="icon_contact_title">Torre</span>
          </div>
        </a>

        <a href="https://wa.me/573202074828">
          <div className="single_contact_icon">
            <img
              area-text="whatsApp"
              src={About.Whatsapp}
              alt="linkedin icon"
              className="contact_icons"
            />
            <span className="icon_contact_title">WhatsApp</span>
          </div>
        </a>
      </footer>
    </div>
  );
}
