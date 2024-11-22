import './about.css';

function About() {
    return (
        <section className="about">
            <div className='about_text'>
                <h2>A propos de moi</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quidem neque beatae eius est adipisci explicabo sed dolorem atque pariatur? Ad voluptatem, voluptatibus aperiam eveniet deleniti in velit porro culpa!
                Rerum aliquam vitae incidunt? Asperiores laudantium facilis enim fugiat! Dolores corporis accusantium sed, consequatur similique voluptate molestiae dolorem quae natus neque dolore ducimus. Quaerat id sed atque ut dolore a.</p>
            </div>
            <div className='about_skills'>
                <h2>Skills</h2>
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