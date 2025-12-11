import { Link } from "react-router";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section class={"page-content " + styles.introCard}>
      <div>
        <header>
          <h2>Milena Georgieva</h2>
          <p>
            SoftUni Graduate • Angular • TypeScript • React • JavaScript •
            Node.js • MongoDB
          </p>
        </header>
        <p>
          Junior Software Developer with 2+ years of academic experience in
          building projects and solving tasks using Angular, TypeScript, React,
          JavaScript, HTML, CSS, Node.js, and Express. Certified Front-End Web
          Developer with JavaScript (SoftUni, Grade: 6.00 / A+ ) with hands-on
          experience in MongoDB, MySQL, GitHub version control, and modern
          styling frameworks including Tailwind, Angular Material, and
          Bootstrap. Passionate about contributing to team success through
          innovation, attention to detail, and problem-solving skills. Strong
          communicator and proficient English speaker, able to perform under
          pressure and meet deadlines with a positive, ambitious, and proactive
          mindset.
        </p>
      </div>
      <div class={styles.avatarCard}>
        <img
          src="/images/avatar-sqr.jpg"
          alt="avatar-img image"
          class="round-avatar"
        />
      </div>
    </section>
  );
}
