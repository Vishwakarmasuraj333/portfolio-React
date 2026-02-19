import Typewriter from "typewriter-effect";

function Banner() {
    return (
        <section className="banner">
            <h1>Hi, I'm <span style={{color:"yellow"}}>Suraj</span>👋</h1>

            <h2>
                <Typewriter
                    options={{
                        strings: [
                            "💻 Frontend Developer",
                            "⚛️ React Specialist",
                            "🎨 Creative UI Designer",
                            "🔥 Building Modern Web Apps"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />

            </h2>
        </section>
    );
}

export default Banner;
