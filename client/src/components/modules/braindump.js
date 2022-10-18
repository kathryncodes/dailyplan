import { TrashIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useContext } from 'react';
import { ModulesContext } from '../../context/modulesContext';

const BraindumpComponent = ( braindump ) => {

    const moduleID = braindump.moduleID
    const title = braindump.title
    const text = braindump.text

    const {modules, dispatch} = useContext(ModulesContext);


     const handleBraindumpDelete = async() => {
        const response = await fetch(`/braindump/delete/${moduleID}`, {
            method: 'DELETE'
           })
    
           const data = await response.json()
    
           if(response.ok){
            console.log("deleted braindump")
           }
     }

    const handleEditTitle = async () => {
       const response = await fetch(`/braindump/editTitle/${moduleID}`, {
        method: 'PUT',
        body: {
            title: title
        }
       })

       const data = await response.json()

       if(response.ok){
        console.log(data)
       }
    }

    const handleEditText = async () => {
        const response = await fetch(`/braindump/editText/${moduleID}`, {
         method: 'PUT',
         body: {
             text: text
         }
        })
 
        const data = await response.json()
 
        if(response.ok){
         console.log(data)
        }
 
     }

    

    const textAreaStyles = {
        resize: "none",
        backgroundColor: "#e1e1e8",
        opacity: 0.5,
        backgroundImage:  "linear-gradient(#a8abe5 1px, transparent 1px), linear-gradient(to right, #a8abe5 1px, #e1e1e8 1px)",
        backgroundSize: "20px 20px",
        color: "black"
    }

    return(
        <div className="h-full border-4 border-base rounded-2xl overflow-y-hidden" name="braindump" >
            <div className="topRow flex justify-between items-center w-full px-2">
           
                <input name="braindumpTitle"  type="text" aria-label="Braindump Title" value={title} onChange={handleEditTitle} placeholder="Enter Title" className="input input-ghost"></input>
                    <button className="deleteModuleBtn" onClick={handleBraindumpDelete}>
                        <TrashIcon className="h-6 w-6"/>
                    </button>
            </div>
            <div className="h-full">
                <textarea name="braindumpText" value={text} onChange={handleEditText} className="input input-ghost h-full w-full font-bold"   style={textAreaStyles}>{text}</textarea> 
            </div>
        </div>
    )
}

export default BraindumpComponent