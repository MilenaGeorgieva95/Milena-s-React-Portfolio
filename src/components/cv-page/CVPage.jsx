import styles from './CVPage.module.css'

export default function CVPage() {
  return (
    <>
      <h2 className={styles.cvTitle}>Milena Georgieva</h2>

      <div className={styles.linksContainer}>
        <div className={styles.linksSection}>
          <p>
            <i class="fa fa-home" aria-hidden="true" /><span>Sofia, Bulgaria</span>
          </p>
          <p>
            <i class="fa fa-phone-alt" aria-hidden="true" /><span>0877514363</span>
          </p>
          <p>
            <i class="fa fa-envelope" aria-hidden="true" /><span>mgeorgieva95@yahoo.com </span>
          </p>
        </div>
                <div className={styles.linksSection}>
          <p>

            <a className="icon brands fa-linkedin" aria-hidden="true" href='https://www.linkedin.com/in/milena-georgieva95'><span>https://www.linkedin.com/in/milena-georgieva95</span></a>
          </p>
          <p>
            <a class="icon brands fa-github" aria-hidden="true" href='https://github.com/MilenaGeorgieva95' ><span>https://github.com/MilenaGeorgieva95</span></a>
          </p>
          <p>
            
            <a href='https://milena-s-react-portfolio.web.app'><img src="/images/icons/dev-svgrepo-com.svg" alt="" /><span>https://milena-s-react-portfolio.web.app</span></a>
          </p>
        </div>
      </div>
    </>
  );
}
