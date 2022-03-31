import React, { useState } from 'react'
import { useGetProjects } from './useGetProjecs'


export const ProjectComponent = () => {

    const [projectData, setProjectData] = useState()

    useGetProjects(setProjectData);

    console.log(projectData)

    // console.log(projectData.data[0].attributes.ProjectDesciption)
    // console.log(projectData.data[0].attributes.ProjectTitle)


    return (<div className="project-component__wrapper">
    {projectData && projectData.data.map((x, key) => (
        <div key={key} className={key%2 ? "project-left-component__wrapper" : "project-right-component__wrapper"}>
            <div className="content__container">
                <h1>{x.attributes.ProjectTitle}</h1>
                <p>{x.attributes.ProjectDesciption}</p>
            </div>
            <div className="image__container">
                <img src={"http://localhost:1337" + x.attributes.project_thumbnail.data.attributes.formats.thumbnail.url}/>
            </div>
        </div>
    ))}
    </div>);
}


// attributes.project_thumbnail.data.attributes.formats.thumbnail.url

        // <img src="http://localhost:1337/uploads/Screenshot_2022_03_07_at_19_02_26_e383b83e94.png" width="200px" />
        // {"http://localhost:1337" + x.attributes.project_thumbnail.data.attributes.formats.thumbnail.url}