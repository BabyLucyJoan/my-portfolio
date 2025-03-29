import styles from "./Contact.module.css";
import { FaPaperPlane, FaMobileAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className={styles.container}>
      {/* Mobile Phone View */}
      <div className={styles.phone}>
        {/* Status Bar */}
        <div className={styles.statusBar}>
          <span>9:41</span>
          <div className={styles.statusIcons}>
            <span className={styles.signal}></span>
            <span className={styles.wifi}></span>
            <span className={styles.battery}></span>
          </div>
        </div>

        {/* Screen Content */}
        <div className={styles.screen}>
          <header className={styles.header}>
            <FaMobileAlt className={styles.icon} />
            <h1>Contact</h1>
            <p>Reach out directly</p>
          </header>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message here..."
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              <FaPaperPlane /> Send
            </button>
          </form>
        </div>

        {/* Home Indicator */}
        <div className={styles.homeIndicator}></div>
      </div>
    </div>
  );
}

export default Contact;
