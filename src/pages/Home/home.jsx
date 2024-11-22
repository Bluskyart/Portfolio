import './home.css';
import ContactForm from '../../Components/contact_form';
import Projects from "../../Components/project.jsx";

function Home() {
  return (
    <main>
      <section id='about'>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error praesentium exercitationem odio aperiam eos delectus velit repellendus excepturi accusantium?</p>
        </div>
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <ContactForm />
      </section>
    </main>
  );
}

export default Home;
