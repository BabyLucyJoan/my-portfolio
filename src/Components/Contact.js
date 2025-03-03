import styles from "./Contact.module.css"; // Import the styles

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out to me via the form below or through my social
        media.
      </p>

      <form className={styles.contactForm}>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />

        <label>Email:</label>
        <input type="email" placeholder="Your Email" />

        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
