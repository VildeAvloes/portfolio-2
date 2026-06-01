import profileImage from "../assets/profile-image.jpg";

function About() {
  return (
    <section id="about" className="about section">
      <div className="content">
        <div className="heading">
          <p className="label">Frontend developer portfolio</p>
          <h1>Hi, my name is Vilde!</h1>
        </div>
        <img src={profileImage} alt="Vilde Avløs" className="image" />
        <p className="text">
          I am a frontend development student with a focus on building
          responsive, accessible and user-friendly web applications.
        </p>

        <a href="#contact" className="button button-secondary">
          Contact me
        </a>
      </div>
    </section>
  );
}

export default About;
