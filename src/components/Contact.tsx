import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Shavezkhan7754@gmail.com" data-cursor="disable">
                Shavezkhan7754@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 7754925133</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://drive.google.com/drive/folders/1TCu9OQuc0r4gqmEGRiUWAcVRc-Pv50Aa"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              G Drive <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shavez-khan-13127b232?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/shavezkhanf67e"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/official.shavez_khan?igsh=MTlhMmx5MG1qajh5Nw%3D%3D&utm_source=qr"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shavez Khan</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
