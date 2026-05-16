import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <p className="section-label">Contact</p>
        <h2>Open to marketing, brand content, and user research roles.</h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:satpathyabhipsa@gmail.com">
                satpathyabhipsa@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+8619566071274">
                +86 19566071274
              </a>
            </p>
            <h4>Location</h4>
            <p>Zhuhai, Guangdong, China</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/abhipsasatpathy9"
              target="_blank"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio adapted for <br /> <span>Abhipsa Satpathy</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
            <p className="template-credit">
              Template foundation credited to{" "}
              <a href="https://www.moncy.dev" target="_blank">
                Moncy Yohannan
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
