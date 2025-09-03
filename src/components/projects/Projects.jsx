import { Link } from "react-router";
import projects from "../../projectsData/projectsData.js";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h2>MY PROJECTS</h2>
      <div className={styles.projectsWrapper}>
        {projects.map((project) => (
          <div className={styles.projectCard}>
            <section>
              <Link
                key={project.id}
                to={`/projects/${project.id}/details`}
                className="group"
              >
                <h3>{project.name}</h3>
                <img alt={project.imageAlt} src={project.imageSrc} />
              </Link>
            </section>

            <section class={styles.detailsSection}>
              <div class={styles.projectLinks}>
                <ul>
                  <li>
                    <Link to={project.codeRepo}>
                      GitHub Repository: <span>{project.codeRepo}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={project.deployedLink}>
                      Live Link: <span>{project.deployedLink}</span> (deployed
                      on Firebase)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p>{project.description}</p>
              </div>
              <div>
                <p>{project.techUsed}</p>
              </div>
              <div class={styles.buttonsContainer}>
                <Link
                  to={project.codeRepo}
                  class={styles.githubBtn + " " + styles.detailsBtn}
                >
                  GitHub Repository
                </Link>
                <Link
                  to={`/projects/${project.id}/details`}
                  class={styles.detailsBtn}
                >
                  Details
                </Link>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
