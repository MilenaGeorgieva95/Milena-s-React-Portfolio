import styles from "./CVPage.module.css";

export default function CVPage() {
  return (
    <div className={styles.CVPageContainer}>
      <div class={styles.headerSection}>
        <div className={styles.avatar}>
          <p className="image avatar-img ">
            <img src="/images/avatar-sqr.jpg" alt="avatar-img image" />
          </p>
          <h2>Hi, I am Milena Georgieva</h2>
          <p>Junior Front-End Developer</p>

        </div>
        <div class={styles.linksWrapper}>
          <section className={styles.linksContainer}>
            <div className={styles.linksSection}>
              <p>
                <i class="fa fa-home" aria-hidden="true" />
                <span>Sofia, Bulgaria</span>
              </p>
              <p>
                <i class="fa fa-phone-alt" aria-hidden="true" />
                <span>+359 877514363</span>
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
                  <div className={styles.cvBtns}>
            {" "}
            <div className={styles.viewBtn}>
              <a
                href="/MGeorgievaCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fa fa-download me-2" /> View CV
              </a>
            </div>
            <div className={styles.downloadBtn}>
              <a href="/MGeorgievaCV.pdf" download>
                {" "}
                <i className="fa fa-download me-2" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <section>
        <h3>PROFILE</h3>
        <div>
          Junior Front-End Developer with strong hands-on experience building
          modern Single Page Applications using Angular, React, JavaScript, and
          Node.js. Graduate of SoftUni (JavaScript Web Developer program) with
          practical experience in REST APIs, authentication systems, and
          full-stack application architecture. Comfortable working with Git,
          databases (MongoDB, MySQL), and responsive UI frameworks such as
          Tailwind and Bootstrap. Passionate about building clean, user-friendly
          web applications and continuously improving development skills.
        </div>
      </section>
      <section className={styles.educationSection}>
        <h3>TECHNICAL SKILLS</h3>
        <div className={styles.educationElement}>
          <ul>
            <li>
              <span>Frontend:</span> HTML5, CSS3, JavaScript (ES6+), TypeScript,
              React.js, Angular
            </li>
            <li>
              <span>Styling:</span> Tailwind CSS, Bootstrap, Angular Material
            </li>
            <li>
              <span>Backend:</span> Node.js, Express.js, REST APIs
            </li>
            <li>
              <span>Databases:</span> MongoDB, MySQL, Mongoose
            </li>
            <li>
              <span>Tools:</span> Git, GitHub, NPM, Postman
            </li>
            <li>
              <span>Other:</span> Firebase, Back4App, JWT Authentication, Agile
              basics
            </li>
            <li>
              <span>Licenses:</span> British passport
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.educationSection}>
        <h3>PROJECTS</h3>
        <div className={styles.educationElement}>
          <h4>CineZone (Angular SPA)</h4>
          <ul>
            <li>
              Built a movie community and watchlist application using Angular
            </li>
            <li>Integrated TMDB API for dynamic movie data</li>
            <li>
              Implemented authentication, comments, likes, and watchlist
              features using Back4App
            </li>
            <li>Focus: API integration, state management, user interaction</li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>Sprout Hub (React SPA)</h4>
          <ul>
            <li>
              Developed a gardening forum platform with full user authentication
            </li>
            <li>Implemented posts, categories, likes, and comments system</li>
            <li>
              Used Back4App for backend services and Firebase for deployment
            </li>
            <li>
              Focus: React components, authentication flow, CRUD operations
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>Veluxe Motors (React SPA)</h4>
          <ul>
            <li>Built a car rental marketplace application</li>
            <li>
              Implemented search filters, booking system, and user accounts
            </li>
            <li>Designed responsive UI with focus on usability and clean UX</li>
            <li>Focus: React routing, filtering logic, UI/UX design</li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>MagmaHaven (Node.js + Express)</h4>
          <ul>
            <li>
              Developed a full-stack forum application using Express and
              Handlebars
            </li>
            <li>Built RESTful backend with MongoDB and Mongoose</li>
            <li>Implemented authentication using JWT, bcrypt, and cookies</li>
            <li>
              Focus: Backend architecture, security, database designFocus: React
              routing, filtering logic, UI/UX design
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.educationSection}>
        <h3>EDUCATION</h3>
        <div className={styles.educationElement}>
          <h4>Software University (SoftUni)</h4>
          <p>JavaScript Web Developer Program (2023 - 2025)</p>
          <ul>
            <li>Frontend & backend development (Angular, React, Node.js)</li>
            <li>OOP, REST APIs, databases, and SPA architecture</li>
            <li>Real-world projects simulating production applications</li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>Udemy - Web Developer Bootcamp (2022 - 2023)</h4>
          <ul>
            <li>HTML, CSS, JavaScript fundamentals</li>
            <li>DOM manipulation, Flexbox, Bootstrap</li>
            <li>Built multiple small web projects</li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>Coventry University, UK</h4>
          <p>Bachelor of Arts (2011 - 2015)</p>
        </div>
      </section>
      <section>
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <div className={styles.educationElement}>
          <h4>Specsavers - Optical Assistant (2016 - 2023)</h4>
          <ul>
            <li>Managed customer appointments and workflow organization</li>
            <li>
              Developed communication and multitasking skills in fast-paced
              environment
            </li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>McDonald's - Shift Manager (2014 - 2016)</h4>
          <ul>
            <li>Led team shifts and ensured operational targets were met</li>
            <li>Developed leadership and time management skills</li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>Assistant Producer - English Theatre of Rome (2013 - 2014)</h4>
          <ul>
            <li>Managed website, social media, and design materials</li>
            <li>Assisted in production logistics and creative direction</li>
          </ul>
        </div>
        <div className={styles.educationElement}>
          <h4>Hotel Receptionist (2010 - 2014)</h4>
          <ul>
            <li>Managed bookings, customer service, and reservations</li>
            <li>Built strong problem-solving and communication skills</li>
          </ul>
        </div>
      </section>
      <section>
        <h3>LANGUAGES</h3>
        <ul>
          <li>English - Full Professional Proficiency</li>
          <li>Bulgarian - Native</li>
        </ul>
      </section>
      <section>
        <h3>ADDITIONAL</h3>
        <ul>
          <li>British Passport</li>
          <li>Design experience (Figma, Photoshop, Illustrator)</li>
          <li>Hobby: Drawing (international and national awards)</li>
        </ul>
      </section>
    </div>
  );
}
