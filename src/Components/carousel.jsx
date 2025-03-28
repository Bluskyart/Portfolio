import React, { useState, useEffect } from "react";
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import './carousel.css';
import projects from "../Datas/projects.json";
import { NavLink } from "react-router-dom";

const MAX_VISIBILITY = 3;

const Card = ({title, content, cover, github, website, isActive, onPrev, onNext, hasPrev, hasNext }) => (
  <div className='card-wrapper'style={{opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none", transition: "opacity 0.3s ease-out"}}>
    {hasPrev && (
      <button className="projects-nav up" onClick={onPrev}>
        <TiChevronRightOutline style={{ transform: "rotate(-90deg)" }} />
      </button>
    )}
    <div className='card-cover' style={{backgroundImage: `url(${cover})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}></div>
    <div className="card-infos">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <div className="project_button">
        <NavLink target='_blank' rel="noreferrer" to={github}>
          <button>Voir sur Github</button>
        </NavLink>
        <NavLink target='_blank' rel="noreferrer" to={website}>
          <button>Site du projet</button>
        </NavLink>
      </div>
    </div>
    {hasNext && (
      <button className="projects-nav down" onClick={onNext}>
        <TiChevronLeftOutline style={{ transform: "rotate(-90deg)" }} />
      </button>
    )}
  </div>
);

const Carousel = () => {
  const [active, setActive] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(projects);
  }, []);

  return (
    <div className="carousel">
      {items.map((project, i) => (
        <div
          key={project.id}
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          <Card title={project.title}
            content={project.description}
            cover={project.cover}
            github={project.github}
            website={project.website}
            isActive={i === active}
            onPrev={() => setActive((i) => i - 1)}
            onNext={() => setActive((i) => i + 1)}
            hasPrev={active > 0}
            hasNext={active < items.length - 1}/>
        </div>
      ))}
    </div>
  );
};

export default Carousel;