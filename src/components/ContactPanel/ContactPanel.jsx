import React from "react";
import "./ContactPanel.scss";
import { About } from "../Image/Projects_Description.js";

export default function ContactPanel({ language }) {
  function HandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="contact_container">
      <h2 className="contact_title">
        {!language ? "Contactáme" : "Contact  me"}
      </h2>
      <div className="container_contacts">
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
      >
        <span className="contact_message">Send me an Email</span>
        <label htmlFor="name"></label>
        <input
          required={true}
          name="name"
          placeholder="Name"
          type="text"
          className="contact_input"
        />
        <label htmlFor="email"></label>
        {/* <div class="input-field"><input type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" class="validate */}
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
          placeholder="Subject"
          type="text"
          className="contact_input"
        />

        <label htmlFor="description"></label>
        <textarea
          required={true}
          className="contact_textarea"
          name="description"
          placeholder="Description"
        ></textarea>
        <div className="container_button">
          <input
            type="submit"
            value="Enviar"
            className="contact_button"
          ></input>
        </div>
      </form>

      <footer className="contact_footer">
        <div className="single_contact_icon">
          <a href="https://github.com/DF27ARTS">
            <img
              src={About.GitHub}
              alt="github icon"
              className="contact_icons"
            />
          </a>
          <span className="icon_contact_title">GitHub</span>
        </div>

        <div className="single_contact_icon">
          <a href="https://www.linkedin.com/in/diego-fernando-rojas-carrillo-full-stack-developer/">
            <img
              src={About.LinkedIn}
              alt="linkedin icon"
              className="contact_icons"
            />
          </a>
          <span className="icon_contact_title">LinkedIn</span>
        </div>

        <div className="single_contact_icon">
          <div className="contact_icons_torre">
            <a href="https://torre.co/@fernando_rc?r=kZjElFcd">
              <img src={About.Picture} alt="picture" />
            </a>
          </div>
          <span className="icon_contact_title">Torre</span>
        </div>

        <div className="single_contact_icon">
          <a href="https://wa.me/573202074828">
            <img
              src={About.Whatsapp}
              alt="linkedin icon"
              className="contact_icons"
            />
          </a>
          <span className="icon_contact_title">WhatsApp</span>
        </div>
      </footer>
    </div>
  );
}
