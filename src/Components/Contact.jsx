function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Left Image */}
        <div className="contact-left">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
            alt="Contact"
          />
        </div>

        {/* Right Form */}
        <div className="contact-right">
          <h2>Contact Me</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message 🚀</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
