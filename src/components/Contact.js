function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="heading">
        <p className="label">Get in touch</p>
        <h2>Interested in working together?</h2>
      </div>
      <p className="text">
        I'm always happy to connect, discuss opportunities or talk about
        frontend development.
      </p>

      <div className="links">
        <a
          href="https://github.com/VildeAvloes"
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vildeavloes/"
          target="_blank"
          rel="noreferrer"
          className="button button-secondary"
        >
          LinkedIn
        </a>

        <a
          href="mailto:your-email@example.com"
          className="button button-secondary"
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
