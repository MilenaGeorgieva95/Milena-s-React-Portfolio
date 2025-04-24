export default function ContactLinks() {
  return (
    <section id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/milena-georgieva95/"
              className="icon brands fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MilenaGeorgieva95"
              className="icon brands fa-github"
            >
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="/contacts" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
