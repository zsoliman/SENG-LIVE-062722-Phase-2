import React from "react";

const ProjectListItem = ({ project }) => {
    return (
        <li classname="card">
            <figure className="image">
                <img src={project.image} alt="" />
                <button className="claps">claps 0</button>
            </figure>

            <section classname='details'>
                <h4> {project.name}</h4>
                <p>{project.about}</p>
                <a href={project.link}>Link</a>
            </section>

            <footer className="extra">
                <span classname='badge blue'>Project</span>
            </footer>


        </li>
    )
}

export default ProjectListItem;