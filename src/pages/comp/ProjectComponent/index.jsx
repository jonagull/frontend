import React, { useState } from 'react'
import { useGetProjects } from './useGetProjecs'


export const ProjectComponent = () => {

    


    const projObject = useGetProjects();    
    console.log(projObject)

    return (
        <React.Fragment>
            <div>
                <h1>Lol</h1>                              
            </div>            
        </React.Fragment>
    )
}

