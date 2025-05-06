import { Link } from "react-router";
import ContactLinks from "../contact-links/contactLinks";

export default function Header() {
  return (
    <header id="header" className="y-10">
      <div className="inner">
        <Link href="#" className="image avatar">
          <img src="/images/avatar.jpg" alt="avatar image" />
        </Link>
        <h1>
          <strong>I am Milena Georgieva, </strong>
          <br />
          Software Developer with solid grounding in React.js, JavaScript and
          SPA applications.
        </h1>
        <ContactLinks />
      </div>
    </header>
  );
}
