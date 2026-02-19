import profileImg from "../assets/suraj.jpeg";
function About() {

  return (
    <section id="about" className="about">
      
      <div className="about-container">

         <div className="about-image">
        <img src={profileImg} alt="Profile" />
      </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span style={{color:"yellow", fontSize: "30px" , fontWeight: "Bold"}}> Suraj</span>👋 A passionate Frontend Developer who loves 
            building responsive and modern web applications using React.
          </p>

          <p>
            I focus on clean UI design, performance optimization, and 
            creating smooth user experiences.
          </p>

          <button className="about-btn">Download CV</button>
        </div>

      </div>

    </section>
  );
}

export default About;
