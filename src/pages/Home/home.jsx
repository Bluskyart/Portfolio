import './home.css';
import ContactForm from '../../Components/contact_form';
import Projects from "../../Components/project.jsx";
import About from "../../Components/about.jsx";
import Landing from "../../Components/landing_section.jsx";

function Home() {
  return (
    <main>
      <section id='landing'>
        <Landing />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </main>
  );
}

export default Home;
