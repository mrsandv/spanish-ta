import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaPhone,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__column">
        <div className="footer__logo">
          <Image fill src="/footer.png" alt="Logo Spanish-TA" />
        </div>
        <p className="footer__quote">
          Site built by AR & MS
          <br />
          <br />
          Design by Aleph Design.
        </p>
      </div>

      <div className="footer__column">
        <h2 className="footer__header">Follow us</h2>
        <Link href="https://www.facebook.com/spanishtrainingcdmx/">
          <div className="icon">
            <FaFacebookSquare />
          </div>
          Facebook
        </Link>
        <Link href="https://www.instagram.com/spanishtrainingacademy/">
          <div className="icon">
            <FaInstagramSquare />
          </div>
          Instagram
        </Link>
        <Link href="https://twitter.com/Spanishta_cdmx">
          <div className="icon">
            <FaTwitterSquare />
          </div>
          Twitter
        </Link>

        <Link href="https://www.linkedin.com/company/spanish-training-academy/">
          <div className="icon">
            <FaLinkedinIn />
          </div>
          LinkedIn
        </Link>
      </div>

      <div className="footer__column">
        <h2 className="footer__header">Contact Phones</h2>
        <p className="footer__quote">
          Business hours:
          <br />
          <br />
          Monday – Friday
          <br />
          <br />
          9:00 – 17:30 hrs (GMT-6).
        </p>
        <h3 className="footer__subtitle">For attention in Spanish:</h3>
        <Link href="tel:525533055178">
          <div className="icon">
            <FaPhone />
          </div>
          + 52 55 33 05 51 78
        </Link>
        <h3 className="footer__subtitle">For attention in English:</h3>
        <Link href="tel:522216546473">
          <div className="icon">
            <FaPhone />
          </div>
          + 52 22 16 54 64 73
        </Link>
      </div>
      <div className="footer__column">
        <h2 className="footer__header">Contact info</h2>
        <h3 className="footer__subtitle">
          For Spanish classes information and prices:
        </h3>
        <Link href="mailto:community.spanishta@gmail.com">
          <div className="icon">
            <FaEnvelope />
          </div>
          community.spanishta@gmail.com
        </Link>

        <h3 className="footer__subtitle">
          Embassies, companies and suppliers:{" "}
        </h3>
        <Link href="mailto:contacto@spanish-ta.com">
          <div className="icon">
            <FaEnvelope />
          </div>
          contacto@spanish-ta.com
        </Link>

        <p className="footer__quote">
          For classes without prior notice of 2 weeks and a reduced number of
          hours, they are offered at a mutually agreed location. We have several
          locations for face-to-face courses that are purchased in advance of at
          least 2 weeks and with a package of at least 25 hours.
        </p>
        <p className="footer__quote">2021 Spanish Training Academy</p>
      </div>
    </div>
  );
};

export default Footer;
