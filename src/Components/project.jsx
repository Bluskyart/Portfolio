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
                        <NavLink to={`/project/${item.id}`}>
                            <button>Lien vers le projet</button>
                        </NavLink>
                    </div>
                </div>
        ))}
    </div>
    );
}

export default Project