import styles from "./section1.module.css"
import logo from "./ph.avif"
function Section() {
  return (
    <section id="hero" className={`${styles['hero']}${styles['d-flex']} ${styles['align-items-center']}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles['col-lg-6']} ${styles['order-2']} ${styles['order-lg-1']} ${styles['d-flex']} ${styles['flex-column']} ${styles['justify-content-center']} ${styles['pb-8']}`}>
            <h1 data-aos="fade-up" className={`${styles.aosInit} ${styles.aosAnimate} ${styles.text}`}>Welcome to North Point Pharma !</h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className={`${styles.aosInit} ${styles.aosAnimate}${styles.text1}`}>The Best Pharmceutical &amp; Surgical Distribution Service Throughout Kashmir Valley</h2>
            <p className={`${styles['text-justify']} ${styles.aosInit} ${styles.aosAnimate}`} data-aos="fade-up" data-aos-delay="400">
              North Point Pharmaceutical Distributors is one of the leading Pharmaceutical firms of Jammu and Kashmir dealing with the distribution of medicines, diagnostic and other surgical products.
              Its presence pervades the entire pharmaceutical market of the valley in both private as well as government sector, with all the districts covered within its extensive network.
              The firm has been able to maintain a strong reputation throughout the past by delivering expert services for the customers.
            </p>
          </div>
          <div className={`${styles['col-lg-6']} ${styles['order-1']} ${styles['order-lg-2']} ${styles['hero-img']} ${styles['pb-8']} ${styles.aosInit} ${styles.aosAnimate}`} data-aos="fade-left" data-aos-delay="200">
            <img src={logo} className={`${styles['img-fluid']} ${styles.animated}`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Section
