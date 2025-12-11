import { Link } from "react-router";
import projects from "../../../projectsData/projectsData.js";
import styles from "./RecentWork.module.css";

export default function RecentWork() {
  return (
    <section class={styles.wrapper}>
      <h2 class="section-title">My Latest Projects</h2>
      <div>
        {projects.map((project) => {
          return (
            <article key={project.id}>
              <Link
                to={`projects/${project.id}/details`}
                class={styles.projectCard}
              >
                

                <div  class={styles.projectCardInfo}>
                  <h3>{project.name}</h3>
                  <div class={styles.description}>
                  <p >{project.description}</p>
                  <div>Details</div>
                  </div>

                </div>
                <div  class={styles.projectCardImg}>
                  <img src={project.imageSrc} alt="project overview image" />
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      <ul>
        <li>
          <Link to="/projects" className="button">
            Full Portfolio
          </Link>
        </li>
      </ul>
    </section>
  );
}
