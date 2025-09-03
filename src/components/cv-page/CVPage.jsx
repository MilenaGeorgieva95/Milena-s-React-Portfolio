import styles from "./CVPage.module.css";

export default function CVPage() {
  return (
    <div className={styles.CVPageContainer}>
      <div class={styles.headerSection}>
        <div className={styles.avatar}>
          <p className="image avatar-img ">
            <img src="/images/avatar-img.jpg" alt="avatar-img image" />
          </p>
          <h2>Hi, I am Milena Georgieva</h2>
          <p>Junior Software Developer</p>
          <div className={styles.downloadBtn}>
            <a href="/MGeorgievaCV.pdf" download>
              {" "}
              <i className="fa fa-download me-2" /> Download CV
            </a>
          </div>
        </div>
        <div class={styles.linksWrapper}>
        <h2 className={styles.cvTitle}>Milena Georgieva's CV</h2>
        <section className={styles.linksContainer}>
          <div className={styles.linksSection}>
            <p>
              <i class="fa fa-home" aria-hidden="true" />
              <span>Sofia, Bulgaria</span>
            </p>
            <p>
              <i class="fa fa-phone-alt" aria-hidden="true" />
              <span>0877514363</span>
            </p>
            <p>
              <i class="fa fa-envelope" aria-hidden="true" />
              <span>mgeorgieva95@yahoo.com </span>
            </p>
          </div>
          <div className={styles.linksSection}>
            <p>
              <a
                className="icon brands fa-linkedin"
                aria-hidden="true"
                href="https://www.linkedin.com/in/milena-georgieva95"
              >
                <span>https://www.linkedin.com/in/milena-georgieva95</span>
              </a>
            </p>
            <p>
              <a
                class="icon brands fa-github"
                aria-hidden="true"
                href="https://github.com/MilenaGeorgieva95"
              >
                <span>https://github.com/MilenaGeorgieva95</span>
              </a>
            </p>
            <p>
              <a href="https://milena-s-react-portfolio.web.app">
                {/* <img src="/images/icons/dev-svgrepo-com.svg" alt="" /> */}
                <span>https://milena-s-react-portfolio.web.app</span>
              </a>
            </p>
          </div>
        </section>
        </div>

      </div>
      <section>
        <h3>Profile</h3>
        <div>
          Junior Software Developer with over two years of academic experience
          creating projects and solving tasks using HTML, CSS, ReactJS,
          JavaScript, Node.js and Express. Currently at the end of a Full-Stack
          JavaScript Web Developer program at SoftUni. Experienced in working
          with databases such as MongoDB and MySQL, version control with GitHub,
          and styling with Tailwind, CSS, and Bootstrap. Eager to contribute to
          collective success, through innovation, hard work, attention to detail
          and excellent organizational skills. Proficient English speaker with a
          positive approach to tasks, working well under pressure, deadline
          orientated, ambitious with a hands on approach.
        </div>
      </section>
      <section className={styles.educationSection}>
        <h3>Education and Qualifications</h3>
        <div className={styles.educationElement}>
          <p>March 2023 - Present</p>
          <h4>Software University (SoftUni)| JavaScript Web Developer</h4>
          <div>
            At SoftUni, I developed modern, practical programming skills under
            the guidance of tutors who lead real-world software development
            teams. I gained knowledge in best coding practices, Object-Oriented
            and Functional Programming, database architecture and error
            handling. I worked on multiple Single-Page Application projects
            using JavaScript, ReactJS, and RESTful APIs focusing on real-world
            scenarios such as building forums and e-commerce platforms.
          </div>
          <ul>
            <li>
              <h5>Key Projects:</h5>
              <ul>
                <li>
                  <span>Sprout Hub: </span>I created a gardening forum app,
                  which provides an interactive platform for users to create,
                  manage, and engage with content, including account creation,
                  authentication, and session management, creating posts, likes
                  and comments. Sprout Hub is a Single-Page ReactJS Application
                  which connects to the SoftUni Practice Server as the Back-End
                  and is deployed using Firebase, Docker and Google Cloud
                  Platform.
                </li>
                <li>
                  <span>Veluxe Motors: </span>Using ReactJS, I made a car rental
                  app that offers an interactive platform enabling users to
                  create car listings, make bookings, search for available
                  vehicles by location, set up accounts, manage their profiles,
                  and interact with content such as special offers and
                  memberships.
                </li>
                <li>
                  <span>Sole Mates: </span>I build a blog application
                  incorporating REST, CRUD, Authentication and Search
                  functionality as part of the JS Applications Module at
                  SoftUni. I utilized page.js and lit-html libraries and
                  deployed the app on GitHub Pages.
                </li>
                <li>
                  <span>MagmaHaven: </span>I created a Multi-Page Application
                  using Express, Express-Handlebars and Node.js as part of the
                  JS Back-End Module at SoftUni and connected it to MongoDB with
                  Mongoose. To manage the user data, I used Bcrypt, JsonWebToken
                  and cookie-parser enabling secure registration and
                  login/logout functionality.
                </li>
              </ul>
            </li>
            <li>
              <h5>Key Modules: </h5>
              React.js, JS Back-End, HTML and CSS, MySQL, JS Applications, JS
              Advanced, Programming Fundamentals with JavaScript, Programming
              Basics with JavaScript
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <p>Oct 2022 - Mar 2023</p>
          <h4>UDEMY | Web Developer Bootcamp</h4>
          <ul>
            <li>
              I gained knowledge of core programming concepts and understanding
              of how key technologies integrate to build modern applications.
            </li>
            <li>
              Key Projects: Museum of Candy, Photo Blog, ToDo List, Score Keeper
            </li>
            <li>
              Key Modules: JavaScript, HTML, CSS, Forms and Tables, Loops, DOM
              Events, Flexbox, Bootstrap
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <p>June 2011 - June 2015</p>
          <h4>Coventry University, Coventry, UK | Bachelor of Arts</h4>
          <ul>
            <li>
              Key Modules: Fashion Design, History of Arts, Marketing, Social
              Media Platforms and Communication, Pattern Making and Materials
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <p>Sep 2005 - May 2010</p>
          <h4>National School of Fine Arts “Ilya Petrov” | Sofia, Bulgaria</h4>
          <ul>
            <li>
              A-levels equivalents: Biology (A*), Bulgarian Language and
              Literature (A*)
            </li>
            <li>AS-levels equivalents: English (A), Mathematics (A)</li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Professional Experience</h3>
        <div className={styles.educationElement}>
          <p>June 2016 - Jan 2023</p>
          <h4>Specsavers, Coventry | Optical Assistant</h4>
          <ul>
            <li>
              Organised appointments, managed time efficiently preparing
              paperwork, pretesting and frame styling.
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <p>Apr 2014 - June 2016</p>
          <h4>McDonald's, Coventry | Shift-Manager</h4>
          <ul>
            <li>
              Supervised and set targets to a team, aiming to meet customer
              expectations and personal growth goals.
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <p>Sept 2013 - Sept 2014</p>
          <h4>Assistant Producer | The English Theatre of Rome, Rome, Italy</h4>
          <ul>
            <li>
              Key responsibilities: Marketing and Design, Costume Design,
              Website and Social Media Manager, Lights Operator, Decor Design.
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <p>Apr 2010 - June 2014</p>
          <h4>Pomorie, Bulgaria | Hotel Receptionist</h4>
          <ul>
            <li>
              Booked in guests, tracked reservations, developed problem solving
              and organisational skills.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Professional Skills</h3>
        <ul>
          <li>
            <span>Web Developer Software: </span>
            Knowledge in JavaScript, React.js, Node.js, NPM, Express, MongoDB,
            Mongoose, Atlas, MySQL, MySQL Workbench, HTML, CSS, Bootstrap,
            Tailwind.
          </li>
          <li>
            <span>Programming concepts: </span>
            Excellent understanding in AJAX, REST, Object-Oriented Programming,
            database management, cloud computing, GitBash and GitHub.
          </li>
          <li>
            <span>Microsoft Office: </span>
            Word, Excel, PowerPoint, Teams, Outlook.
          </li>
          <li>
            <span>Design Skills: </span>
            Strong ground in UI/UX design techniques, Photoshop, Illustrator and
            Figma.
          </li>
          <li>
            <span>Management: </span>
            Shift-manager in a retail company.
          </li>
          <li>
            <span>Licenses: </span>
            British passport.
          </li>
        </ul>
      </section>
      <section>
        <h3>Languages</h3>
        <ul>
          <li>
            <span>English: </span>
            Full professional proficiency
          </li>
          <li>
            <span>Bulgarian: </span>
            Native speaker
          </li>
        </ul>
      </section>
      <section>
        <h3>Interests and Activities</h3>
        <ul>
          <li>
            <span>Drawing: </span>
            Competed in several competitions, winning one international and two
            national awards
          </li>
          <li>
            <span>Warwick Dragon Boat Festival (2019): </span>
            Participated in a rowing race for charity
          </li>
        </ul>
      </section>
    </div>
  );
}
