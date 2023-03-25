import { TrashIcon , PlusCircleIcon } from '@heroicons/react/24/solid'
import { MyModal } from '../modal';
import { useState, useEffect, useContext } from 'react';
import { ModulesContext } from '../../context/modulesContext';

import ReactModal from 'react-modal'
ReactModal.setAppElement('body')

const WorldClockComponent = (worldclock) => {

    // const handleClockDelete = async() => {
    //     const response = await fetch(`/todo/deleteList/${moduleID}`, {
    //         method: 'DELETE'
    //     })

    //     const data = await response.json()

    //     if(response.ok){
    //         console.log(data)
    //         dispatch({type: 'DELETE_MODULE', payload: data})
    //     }
    // }

    //module ID and context
   
    const moduleID = worldclock.moduleID
    const {modules, dispatch} = useContext(ModulesContext);

    const listOfTimezones = modules.filter(module => module._id == moduleID)
    const timezones = listOfTimezones[0].timezones

    console.log(timezones)

    //modal code
    const [isOpen, setIsOpen] = useState(false)
    function handleOpen(){
        setIsOpen(true);
    }
    function handleClose(){
        setIsOpen(false)
    }
    const modalStyle = {
        content: {
            width: "40vw",
            margin: "auto",
            height: "min-content",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem"
        }
    }

    return(
        <div className="h-full border-4 border-base rounded-2xl overflow-y-hidden" name="worldclock" >
        <div className="topRow flex justify-between items-center w-full px-2">
            <h2 className='text-xl mt-2 mb-2 ml-4 font-bold'>World Clock</h2>
            <div className="flex items-center">
                    <button >
                            <PlusCircleIcon className="h-6 w-6 mx-1" onClick={handleOpen}/>
                    </button>
                    <button className="deleteModuleBtn">
                        <TrashIcon className="h-6 w-6"/>
                    </button>
            </div>
        </div>
        <div className="h-full">

            {timezones.map(timezone => <Timezone city={timezone.city} country={timezone.country} key={timezone._id} timezoneID={timezone._id} worldclockID={moduleID} />)}

        </div>
        <ReactModal isOpen={isOpen} style={modalStyle} >
                <MyModal moduleID={worldclock.moduleID} modalType="AddTimezone" handleClose={handleClose}/>
                <button onClick={handleClose} className="btn btn-primary">Close</button>
        </ReactModal>
    </div>


    )

}

const Timezone = (props) => {
   
    return(
        <div>
            <p>{props.city}, {props.country}</p>

        </div>

    )

}



export default WorldClockComponent