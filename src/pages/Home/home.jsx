import './home.css';
import ContactForm from '../../Components/contact_form';
import Projects from "../../Components/project.jsx";
import About from "../../Components/about.jsx";

function Home() {
  return (
    <main>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <p>Contact</p>
        <ContactForm />
      </section>
    </main>
  );
}

export default Home;
