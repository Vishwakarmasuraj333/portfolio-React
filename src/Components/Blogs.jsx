function Blogs() {
  return (
    <section id="blogs" className="blogs">
      <h2>Latest Blogs</h2>

      <div className="blogs-container">

        <div className="blog-card">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
            alt="Blog 1" 
          />
          <div className="blog-content">
            <h3>Mastering React in 2025</h3>
            <p>
              Learn modern React concepts, hooks, performance optimization,
              and how to build scalable applications.
            </p>
            <button className="blog-btn">Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
            alt="Blog 2" 
          />
          <div className="blog-content">
            <h3>Frontend Trends & UI Design</h3>
            <p>
              Explore the latest UI trends, animations, responsive layouts,
              and how to create engaging user experiences.
            </p>
            <button className="blog-btn">Read More</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Blogs;
