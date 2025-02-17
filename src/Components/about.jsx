import './about.css';

function About() {
    return (
        <section className="about">
            <div className='about_text'>
                <h2>A propos de moi</h2>
                <div className='about_presentation'>
                    <p>Je suis un développeur web junior passionné par la conception de sites simples, efficaces et esthétiques. Actuellement, j'apprends et mets en pratique les technologies du web comme <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>React</strong>. Je suis motivé par l'idée de résoudre des problèmes techniques et de transformer des idées en projets concrets.</p>
                    <p>N'hésitez pas à parcourir mon portfolio pour découvrir mes projets et mon parcours !</p>
                </div>
            </div>
            <div className='about_skills'>
                <h3>Skills</h3>
                <div className='skills_list'>
                    <div className="skills html"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="HTML" />HTML</div>
                    <div className="skills css"><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" />CSS</div>
                    <div className="skills javascript"><img src="https://cdn-icons-png.flaticon.com/512/4726/4726005.png " alt="JavaScript" />JavaScript</div>
                    <div className="skills react"><img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" />React</div>
                    <div className="skills nodejs"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="NodeJS" />NodeJS</div>
                    <div className="skills seo"><img src="https://cdn-icons-png.flaticon.com/512/3820/3820476.png" alt="SEO" />SEO</div>
                    <div className="skills github"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub" />Github</div>
                </div>
            </div>
        </section>
    );
}

export default About;