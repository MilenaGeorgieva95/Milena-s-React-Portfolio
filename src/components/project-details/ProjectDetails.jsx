import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import projects from "../../projectsData/projectsData.js";
import { useParams } from "react-router";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((el) => el.id == projectId);

  return (
    <div className={styles.projectPage}>

  <div className={styles.projectHeader}>
    <h1 className={styles.projectTitle}>{project.name}</h1>

    <nav className={styles.projectNav}>
      <ul className={styles.projectLinks}>
        <li>
          <a href={project.deployedLink} className={styles.projectLink}>
            Live Project
          </a>
        </li>
        <li>
          <a href={project.codeRepo} className={styles.projectLink}>
            GitHub Repo
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div className={styles.projectGallery}>
    <img src={project.imageSrc} alt={project.name} className={styles.mainImage} />

    <div className={styles.sideImages}>
      <img src={project.imagesDetails[0]} alt="" />
      <img src={project.imagesDetails[1]} alt="" />
    </div>

    <img src={project.imagesDetails[2]} alt="" className={styles.tallImage} />
  </div>

  <div className={styles.projectInfo}>

    <div className={styles.descriptionBlock}>
      <h3>Description</h3>
      <p>{project.description}</p>
    </div>

    <div className={styles.highlightsBlock}>
      <h3>Highlights</h3>
      <ul>
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>

    <div className={styles.techBlock}>
      <h3>Technologies Used</h3>
      <p>{project.techUsed}</p>
    </div>

  </div>
</div>
  );
}
