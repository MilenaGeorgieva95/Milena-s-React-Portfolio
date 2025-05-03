import { Link } from "react-router";
// https://sprout-hub-458309.web.app/
import projects from "../../../projectsData/projectsData.js";

export default function RecentWork() {
  return (
    <section id="two">
      <h2>Recent Work</h2>
      <div className="row">
        {projects.map((project) => {
          return (
            <article
              key={project.id}
              className="col-6 col-12-xsmall work-item hover:opacity-55"
            >
              <Link to={`projects/${project.id}/details`}>
                <img src={project.imageSrc} alt="" />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </Link>
            </article>
          );
        })}
      </div>
      {/* <ul className="actions">
        <li>
          <Link href="#" className="button">
            Full Portfolio
          </Link>
        </li>
      </ul> */}
    </section>
  );
}
