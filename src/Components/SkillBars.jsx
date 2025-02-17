import { useState, useEffect } from "react";

const SkillBar = ({ title, percent, className }) => {
    const [width, setWidth] = useState("0%");
    const [completed, setCompleted] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth(percent);
        setCompleted(true);
      }, 500);
  
      return () => clearTimeout(timer);
    }, [percent]);
  
    return (
      <div className={`skillbar ${className} ${completed ? "complete" : ""}`} data-percent={percent}>
        <h4 className="skillbar-title"><span>{title}</span></h4>
        <div className="skillbar-bar" style={{ width }}></div>
        <div className="skill-bar-percent">{percent}</div>
      </div>
    );
  };
  
  const SkillBars = () => {
    const skills = [
      { title: "HTML5", percent: "100%", className: "html5" },
      { title: "CSS", percent: "100%", className: "css" },
      { title: "JavaScript", percent: "100%", className: "javascript" },
      { title: "jQuery", percent: "100%", className: "jquery" },
      { title: "PHP", percent: "100%", className: "php" },
      { title: "WordPress", percent: "100%", className: "wordpress" },
    ];
  
    const [index, setIndex] = useState(-1);
  
    useEffect(() => {
      if (index < skills.length - 1) {
        const timer = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1);
        }, 500);
  
        return () => clearTimeout(timer);
      }
    }, [index, skills.length]);
  
    return (
      <div className="skills_list">
        {skills.map((skill, i) => (
          <SkillBar key={i} title={skill.title} percent={i <= index ? skill.percent : "0%"} className={skill.className} />
        ))}
      </div>
    );
  };

export default SkillBars;