import {useState} from 'react'
import "./Portfolio.css";
import { projects } from "./projects";
import { Modal } from "../components/index"

function Portfolio() {
const [currentIdx, setCurrentIdx] = useState(null);

const handleClick = (idx) => setCurrentIdx(idx);
const clearCurrent = () => setCurrentIdx(null);

    const projectsList = projects.map ((project, idx) => {
        return (
            <div key={idx} onClick={() => handleClick(idx)} className="portfolio-projects-frame">
                <img src={project.image} alt={project.title}/>

            </div>
        );
    });

    let currentProject = currentIdx >= 0 && projects[currentIdx];

    
  return (
    <div id="portfolio" className='portfolio-container'>
        <h1>Portfolio</h1>
        <p>
            This is my github page<a href='https://picsum.photos/800' target="blank" rel="noreferrer">https://picsum.photos/800</a>
        </p>
        <div className="portfolio-grid">
            {currentProject && (
                <Modal 
                onClick={clearCurrent}
                title={currentProject.title} description={currentProject.description}
                image={currentProject.image}
                url={currentProject.url} 
                />
            )}
            {projectsList}

        </div>

    </div>
  )
}

export default Portfolio