import Landscape from "@/components/Landscape";
import { projects, services, skills } from "@/data/projects";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <Landscape />
      <nav>
        <a href="#top" style={{ margin: 0 }}>Nessrine Macherki</a>
        <span>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </span>
      </nav>
      <main>
        <section id="top">
          <h1>Hi, I&apos;m Nessrine.</h1>
          <p className="lead">
            Full-stack web developer and UI/UX designer. I build modern, responsive, user-friendly websites that
            combine creative design with clean, functional code.
          </p>
          <div>
            <a className="btn p" href="#work">Explore work</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="about">
          <h2>Building digital experiences with purpose</h2>
          <div className="panel">
            <p style={{ marginTop: 0 }}>
              I&apos;m a software developer and web designer focused on modern, responsive, user-friendly digital
              experiences. I pair thoughtful interface design with clean, scalable code to turn ideas into websites
              and web applications that feel as good as they work.
            </p>
            <ul className="skills">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </section>

        <section id="services">
          <h2>Tailored digital solutions</h2>
          <div className="grid">
            {services.map((s) => (
              <div className="card" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
            ))}
          </div>
          <p style={{ marginTop: "1.4rem" }}><a className="btn p" href="#contact">Start a project</a></p>
        </section>

        <section id="work">
          <h2>Featured projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <span className="kind">{p.kind}</span>
                <h3>{p.title}</h3>
                <p className="links">
                  <a href={p.live} {...ext}>{p.github ? "Live demo" : "Live site"}</a>
                  {p.github && <a href={p.github} {...ext}>GitHub</a>}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Let&apos;s work together</h2>
          <p className="lead">Have a project in mind? Send me a message or give me a call.</p>
          <div>
            <a className="btn p" href="mailto:infofigue@gmail.com">infofigue@gmail.com</a>
            <a className="btn" href="tel:+21655237698">+216 55 237 698</a>
            <a className="btn" href="https://github.com/Nessrine88" {...ext}>GitHub</a>
          </div>
          <p style={{ color: "var(--mute)" }}>© {new Date().getFullYear()} Nessrine Macherki. All rights reserved.</p>
        </section>
      </main>
    </>
  );
}
