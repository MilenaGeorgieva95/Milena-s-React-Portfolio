import { Link } from "react-router";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section class={"page-content " + styles.introCard}>
      <div>
        <header>
          <h2>Hi, I am Milena Georgieva</h2>
          <p>
            SoftUni Graduate • Angular • TypeScript • React • JavaScript •
            Node.js • MongoDB
          </p>
        </header>
        <p>
Junior Front-End Developer with strong hands-on experience building modern Single Page Applications using Angular, React, JavaScript, and Node.js. Graduate of SoftUni (JavaScript Web Developer program) with practical experience in REST APIs, authentication systems, and full-stack application architecture. Comfortable working with Git, databases (MongoDB, MySQL), and responsive UI frameworks such as Tailwind and Bootstrap. Passionate about building clean, user-friendly web applications and continuously improving development skills.
        </p>
      </div>
    </section>
  );
}
