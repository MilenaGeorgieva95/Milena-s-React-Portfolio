export default function Contacts() {
  return (
    <section id="three">
      <h2>Get In Touch</h2>
      <p>
        Interested in collaborating or have a project in mind?
        <br />
        I am currently looking for new opportunities as a developer.
        <br />
        If you think I'd be a good fit for your team, feel free to reach out —
        I'd love to connect.
      </p>
      <div className="row">
        <ul className="labeled-icons content-center">
          <li>
            <h3 className="icon solid fa-mobile-alt">
              <span className="label">Phone</span>
            </h3>
            0044-7487-648730
          </li>
          <li>
            <h3 className="icon solid fa-envelope">
              <span className="label">Email</span>
            </h3>
            <p>mgeorgieva95@yahoo.com</p>
          </li>
          <li>
            <h3 className="icon solid fa-home">
              <span className="label">Address</span>
            </h3>
            Sofia, Bulgaria
          </li>
        </ul>
      </div>
    </section>
  );
}
