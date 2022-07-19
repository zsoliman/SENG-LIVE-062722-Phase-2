import React from 'react';
import ProjectListItem from './ProjectListItem.js';


const ProjectList = ({ projects }) => {
    console.log(projects)
    return (
        <section>
            <h2>Projects</h2>

            <div className='filter'>
                <button>All</button>
                <button>Java</button>
                <button>React</button>
                <button>Ruby</button>
                <button>Rails</button>
            </div>

            <ul className='cards'>
                <ProjectListItem project={projects[0]} />


            </ul>
        </section>
    )
}

export default ProjectList;