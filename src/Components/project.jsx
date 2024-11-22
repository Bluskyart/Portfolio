import {React, useState, useEffect}  from "react";
import projects from "../Datas/projects.json";
import { NavLink } from "react-router-dom";
import './project.css';

function Project() {
    const [items, setItems] = useState([]);

    useEffect(() => {
    setItems(projects);
    }, []);

    return (
    <div className="project-container">
        {items.map((item) => (
                <div className="project-items" key={item.id}>
                    <img className="card_cover" src={item.cover} alt={item.title}/>
                    <div className="project-infos">
                        <h2 className="card_title">{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="project_button">
                            <NavLink target='_blank' rel="noreferrer" to={item.github}>
                                <button>Voir sur Github</button>
                            </NavLink>
                            <NavLink target='_blank' rel="noreferrer" to={item.website}>
                            <button>Site du projet</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
        ))}
    </div>
    );
}

export default Project