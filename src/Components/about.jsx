import './about.css';

function About() {
    return (
        <section className="about">
            <div className='about_text'>
                <h2>A propos de moi</h2>
                <div className='about_presentation'>
                    <p>Bonjour et bienvenue sur mon portfolio !</p>    
                    <p>Je m'appelle <strong>Guerwan LESCROHART</strong> et je suis un développeur web débutant passionné par la conception de sites simples, efficaces et esthétiques. Actuellement, j'apprends et mets en pratique les technologies du web comme <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>React</strong>. Je suis motivé par l'idée de résoudre des problèmes techniques et de transformer des idées en projets concrets.</p>
                    <p>N'hésitez pas à parcourir mon portfolio pour découvrir mes projets et mon parcours !</p>
                </div>
            </div>
            <div className='about_skills'>
                <h3>Skills</h3>
                <div className='skills_list'>
                    <div className="skills">HTML</div>
                    <div className="skills">CSS</div>
                    <div className="skills">JavaScript</div>
                    <div className="skills">React</div>
                    <div className="skills">NodeJS</div>
                    <div className="skills">SEO</div>
                    <div className="skills">Github</div>
                </div>
            </div>
        </section>
    );
}

export default About;