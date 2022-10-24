import { TrashIcon , PlusCircleIcon } from '@heroicons/react/24/solid';
import { MyModal } from '../modal';
import { useState, useContext } from 'react';
import ReactModal from 'react-modal'
import { ModulesContext } from '../../context/modulesContext';

import { DndContext, closestCenter, useDraggable, useDroppable } from '@dnd-kit/core'

import { useSortable, SortableContext, verticalListSortingStrategy,  } from '@dnd-kit/sortable';

import { restrictToVerticalAxis , restrictToParentElement} from '@dnd-kit/modifiers'

import { CSS } from '@dnd-kit/utilities'

ReactModal.setAppElement('body')

const ScheduleComponent = (schedule) => {
    const moduleID = schedule.moduleID

    //get schedule blocks
    const {modules, dispatch} = useContext(ModulesContext);

    const findSchedule = modules.filter(module => module._id == moduleID)
    const timeblocks = findSchedule[0].blocks

    //console.log(findSchedule);
    console.log(timeblocks)

    //delete Schedule Module
    const handleDeleteSchedule = async() => {
        const response = await fetch(`/schedule/delete/${moduleID}`, {
            method: 'DELETE'
        })

        const data = await response.json()

        if(response.ok){
            console.log(data)
            dispatch({type: 'DELETE_MODULE', payload: data})
        }
    }


    //modal Code
const [isOpen, setIsOpen] = useState(false)

function handleOpen(){
    setIsOpen(true);
    console.log(moduleID)
}

function handleClose(){
    setIsOpen(false)
}

    const draggableStyle = {
        backgroundColor: "#bfbfd5",
        opacity: 0.8,
        backgroundImage:  "radial-gradient(#363851 0.5px, transparent 0.5px), radial-gradient(#363851 0.5px, #bfbfd5 0.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0,10px 10px",
        //zIndex: "-1",
        color: "black"
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

    //Drag and Drop
    function handleDragEnd(event) {
        console.log(event)
    }

    const { attributes, listeners, setNodeRef } = useSortable(timeblocks)

    return(
        <div className="border-4 border-base rounded-2xl row-start-1 row-span-2 col-span-1 h-full overflow-y-hidden">
            <div className="topRow h-12 flex items-center justify-between  border-b border-base">
                <div>
                    <h2 className='text-xl mt-2 mb-2 ml-4 font-bold'>Today's Plan</h2>
                </div> 
                <div className="flex items-center justify-end px-3"> 
                    <button onClick={handleOpen} className="">
                        <PlusCircleIcon className="h-6 w-6 mx-1" />
                    </button> 
                    <button className="deleteModuleBtn" onClick={handleDeleteSchedule}>
                        <TrashIcon className="h-6 w-6"/>
                    </button>
                </div>
            </div>

             <div className="moduleMainContent h-full flex flex-row w-full border-b border-dotted border-base">
               
                <div className=" w-24 m-0 p-0 flex flex-col justify-between">

                    <div id="topY" className='  border-t border-b border-base border-dotted'>6:00</div>
                    <div id="lowY" className=' border-t  border-b border-base border-dotted '>7:00</div>
                    <div className='  border-t border-b border-base border-dotted '>8:00</div>
                    <div className=' border-t border-b border-base border-dotted  '>9:00</div>
                    <div className=' border-t border-b border-base border-dotted   '>10:00</div>
                    <div className='  border-t border-b border-base border-dotted   '>11:00</div>
                    <div className='  border-t  border-b border-base border-dotted '>12:00</div>
                    <div className=' border-t  border-b border-base border-dotted  '>1:00</div>
                    <div className='  border-t border-b border-base border-dotted  '>2:00</div>
                    <div className='  border-t border-b border-base border-dotted   '>3:00</div>
                    <div className=' border-t border-b border-base border-dotted  '>4:00</div>
                    <div className=' border-t border-b border-base border-dotted    '>5:00</div>
                    <div className=' border-t  border-b border-base border-dotted '>6:00</div>
                    <div className=' border-t border-b border-base border-dotted  '>7:00</div>
                    <div className=' border-t border-b border-base border-dotted   '>8:00</div>
                    <div className=' mb-12 border-t  border-b border-base border-dotted   '>9:00</div>

                </div>
           
           <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} autoScroll={false} modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
                   
                    <div className=" w-full m-0 p-0 " style={draggableStyle} ref={setNodeRef} > 
                    
                        {timeblocks.map(block => 
                           <SortableContext items={timeblocks} key={block._id} strategy={verticalListSortingStrategy}>
                                <BlockComponent {...attributes} {...listeners}
                                task={block.task} hours={block.hours} minutes={block.minutes} blockID={block._id} scheduleID={moduleID} timeblocks={timeblocks}/> 
                            </SortableContext>
                        )}
                      

                    </div>
                    
            </DndContext>

            </div> 
            
                <ReactModal isOpen={isOpen} style={modalStyle} >
                    <MyModal moduleID={moduleID} modalType="AddBlock" handleClose={handleClose}/>
                    <button onClick={handleClose} className="btn btn-primary">Close</button>
                </ReactModal>
            
        </div>
        
    )
}

const BlockComponent = ({task, hours, minutes, blockID, scheduleID, timeblocks}) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({id: blockID})

    const duration = `${hours} Hours and ${minutes} Minutes`

    const {dispatch} = useContext(ModulesContext);

    const handleDeleteBlock = async() => {
        const response = await fetch(`/schedule/deleteBlock/${scheduleID}&${blockID}`, { method: 'PUT'})
        const data = await response.json()

        if (response.ok){
            console.log("response ok")
            console.log(data)
            dispatch({type: 'UPDATE_MODULE', payload: data})
        }
    }

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }


    return(
       
            <div  className={`border border-primary flex justify-between h-12`} {...attributes} {...listeners} ref={setNodeRef} style={style}>
                <p>{task}
                <br/> {duration}
                </p>
                <button className="deleteBlockBtn" onClick={handleDeleteBlock}>
                    <TrashIcon className="h-6 w-6"/>
                </button>
                
            </div>
    
    )
}

export default ScheduleComponent