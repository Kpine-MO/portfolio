import React from "react";
import "./Contact.css";
import { FaReact } from "react-icons/fa"
import { VscJson } from "react-icons/vsc"

function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHolder">
        <h5 className="contactH5">like what u see ?</h5>
        <h1 className="contactH1">reach out</h1>
        <p className="contactP">
          I am always looking for opportunities amongst forward driven
          individuals which pretty much leaves my inbox always open to anyone
          who has questions or want's to say hi or want's to offer me an
          opportunity. You can reach me down below.{" "}
        </p>
        <a
          className="contactLink"
          href="https://mail.google.com/mail/u/0/?to=cpine0223@gmail.com&fs=1&tf=cm"
        >
          down below
        </a>

        <a href="https://github.com/Kpine-MO?tab=repositories">
        <div className="contactBy">
            <p>Designed & built by Chrispine Ochieng</p>
            <div className="contactWith">
                <FaReact/>
                <VscJson/>
            </div>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
