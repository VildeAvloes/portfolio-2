function Contact() {
  return (
    <section id="contact" className="contact section">
      <p className="contact__eyebrow">Contact</p>

      <h2>Let&apos;s connect</h2>

      <p>You can find me on GitHub and LinkedIn, or reach out by email.</p>

      <div className="contact__links">
        <a
          href="https://github.com/VildeAvloes"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vildeavloes/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:your-email@example.com">Email</a>
      </div>
    </section>
  );
}

export default Contact;
