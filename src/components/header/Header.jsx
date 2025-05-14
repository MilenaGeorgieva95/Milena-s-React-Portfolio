import { Link } from "react-router";
import ContactLinks from "../contact-links/contactLinks";

export default function Header() {
  return (
    <header id="header" className="y-2">
      <div className="inner">
        <p className="image avatar ">
          <img src="/images/avatar.jpg" alt="avatar image" />
        </p>
        <h2>Hi, I am Milena Georgieva</h2>
        <ContactLinks />
      </div>
    </header>
  );
}
