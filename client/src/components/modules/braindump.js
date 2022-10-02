import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const BraindumpComponent = (props) => {
    
    //get ObjectId for braindump from database
    // const id = ""

    // const handleBraindumpDelete = (props) => {
    //     async (req, res) => {
    //      await fetch("/braindump/deleteBraindump/{props.id}", {method: DELETE});
        //  
        //      
    //         

    // const handleEditTitle = () => {
    //     async (req, res) => {
    //         // await fetch to /braindump/editTitle/:id
    //     }
    // }

    // const handleEditText = () => {
    //     async (req, res) => {
    //         //await fetch to /braindump/editText/:id
    //     }
    // }

    const textAreaStyles = {
        resize: "none",
        backgroundColor: "#e1e1e8",
        opacity: 0.5,
        backgroundImage:  "linear-gradient(#a8abe5 1px, transparent 1px), linear-gradient(to right, #a8abe5 1px, #e1e1e8 1px)",
        backgroundSize: "20px 20px",
        color: "black"
    }

    return(
        <div className="h-full border-4 border-base rounded-2xl overflow-y-hidden" name="braindump" id={props.id}>
            <div className="topRow flex justify-between items-center w-full px-2">
                <span></span>
                <input name="braindumpTitle" type="text" aria-label="Braindump Title" placeholder="Brain Drump" className="input input-ghost" />
                    <button className="deleteModuleBtn">
                        <TrashIcon className="h-6 w-6"/>
                    </button>
            </div>
            <div className="h-full">
                <textarea name="braindumpText" className="input input-ghost h-full w-full font-bold" style={textAreaStyles}></textarea> {/*Make whole div into a stylized text box --> use textarea tags instead of input?*/}
            </div>
        </div>
    )
}

export default BraindumpComponent