import {React, useState, useEffect}  from "react";
import projects from "../Datas/projects.json";
import { NavLink } from "react-router-dom";
import './project.css';
import Carousel from "./carousel.jsx";


function Project() {
    const [items, setItems] = useState([]);
    const [openProjectId, setOpenProjectId] = useState(null);
    const togglePopup = (id) => {setOpenProjectId(openProjectId === id ? null : id)};

    useEffect(() => {
    setItems(projects);
    }, []);

    return (
    <div className="project-page">
        <h2 className="project-title">Projets</h2>
        <Carousel />
        {/* {items.map((item) => (
                    <div className="project-items" key={item.id}>
                        <div className="project_image">
                            <img className="card_cover" src={item.cover} alt={item.title}/>
                            {openProjectId === item.id && (<div className="popup"><p>{item.comments}</p></div>)}
                        </div>
                        <div className="project-infos">
                            <h2 className="card_title">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="card_skills">
                                {item.skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                    {skill}
                                    </div>
                                ))}
                            </div>
                            <div className="project_button">
                                <NavLink target='_blank' rel="noreferrer" to={item.github}>
                                    <button>Voir sur Github</button>
                                </NavLink>
                                <NavLink target='_blank' rel="noreferrer" to={item.website}>
                                <button>Site du projet</button>
                                </NavLink>
                                <button onClick={() => togglePopup(item.id)}>Détails</button>
                            </div>
                        </div>
                    </div>
            ))}  */}
    </div>
    );
}

export default Project