import "./Projects.css";
import { X } from "react-feather";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getProjectsList, setProjectsList } from "../../Helper/APILayers";
import ProjectAdd from "../../Components/ProjectAdd/ProjectAdd";

function Projects() {
  const [list, setList] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(async ()=>{
    await fetchData()
  },[])

  async function fetchData() {
    const listData = await getProjectsList();
    setList(listData);
  }

  const addProject = async (name) => {
    setList([...list, name])
    await setProjectsList(name)
    setShowModal(false)
  }

  return (
    <div className="project">
      {showModal &&
        <ProjectAdd onClose={()=>setShowModal(false)} addProject={addProject} />
      }
      <div className="project-projects-container">
        <div className="project-projects-title">
          <h1>Projects</h1>
          <X className="addIcon" onClick={()=>setShowModal(true)} />
        </div>
        <div className="project-projects-list">
          {list.map( (elem) => <NavLink
            to={`/${elem}`}
            key={elem}
            className="link"
          >
            {elem}
          </NavLink>)}
          {list.length === 0 && <div>there is no project, click +</div>}
        </div>
      </div>
    </div>);
}

export default Projects;
