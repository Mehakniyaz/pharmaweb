import styles from './footer.module.css';


function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={`row d-flex align-items-center ${styles.row}`}>
          <div className={`col-lg-6 text-lg-left text-center ${styles.col} ${styles.copyRightWrapper}`}>
            <div className={styles.copyRight}>
              © {new Date().getFullYear()} <strong>North Point Pharmaceutical Distributors.</strong> All Rights Reserved
            </div>
          </div>
          <div className={`col-lg-6 ${styles.col} ${styles.menuWrapper}`}>
            <nav className={`footer-links text-lg-right text-center pt-2 pt-lg-0 ${styles.nav}`}>
              <a href="#header" className={styles.scrollto}>
                Home
              </a>
              <a href="#about" className={styles.scrollto}>
                About
              </a>
              <a href="privacypolicy.html" className={styles.privacy}>
                Privacy Policy
              </a>
              <a href="termsofuse.html" className={styles.terms}>
                Terms of Use
              </a>
              <a href="disclaimer.html" className={styles.disclaimer}>
                Disclaimer
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
