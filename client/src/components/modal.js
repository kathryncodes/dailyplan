import React, { useContext, useState } from "react";
import { ModulesContext } from "../context/modulesContext";

export const MyModal = (props) => {

    const handleClose = props.handleClose

    return(
            <div className="flex flex-col">
                <div > 
                        <div className="">
                            {props.modalType === 'AddBlock' && <AddTimeBlock moduleID={props.moduleID} handleClose={handleClose}/>}
                            {props.modalType === 'AddTodoItem' && <AddTodoItem moduleID={props.moduleID} handleClose={handleClose}/>}
                            {props.modalType === 'AddTimezone' && <AddTimezone moduleID={props.moduleID} handleClose={handleClose}/>}
                        </div>
                </div>
            </div>
    )
   
  };


const AddTimeBlock = ({moduleID, handleClose}) => {

    const {dispatch} = useContext(ModulesContext)

    const [task, setTask] = useState('')
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const handleAddBlock = async() => {

        console.log("click")
        console.log(hours)
        console.log(minutes)
        console.log(moduleID)
        const response = await fetch(`/schedule/addBlock/${moduleID}` , {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                task: task,
                hours: hours,
                minutes: minutes
            })
        })
        const data = await response.json()

        if(response.ok){
            console.log(data)
            dispatch({type: 'UPDATE_MODULE', payload: data})
            handleClose()
        }
        
    }
    
    return(
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <input type="text" value={task} onChange={e => setTask(e.target.value)}  name="task" aria-label="task" placeholder="Task" className="input input-ghost w-full" />
                <div className="flex gap-2 items-center w-full">
                    Duration:
                        <input type="number"  value={hours} onChange={e => setHours(e.target.value)} name="hours" aria-label='house' placeholder="Hours" className="input input-ghost w-28"/>
                        <select name="minutes" value={minutes} onChange={e => setMinutes(e.target.value)} aria-label='minutes' className="input input-ghost w-full">
                            <option type="number" value={0}>0 minutes</option>
                            <option type="number" value={15}>15 minutes</option>
                            <option type="number" value={30}>30 minutes</option>
                            <option type="number" value={45}>45 minutes</option>
                        </select>
                </div>
                <button className='btn btn-primary mt-6' onClick={handleAddBlock}>Add Time Block</button>
            </div>
    )
}

const AddTodoItem = ({moduleID, handleClose}) => {

    const { dispatch } = useContext(ModulesContext)

    const [todoItem, setTodoItem] = useState('')
    const [priority, setPriority] = useState('')
    const [dueDate, setDueDate] = useState('')


    const handleAddItem = async() => {
     
        const response = await fetch(`/todo/addItem/${moduleID}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                text: todoItem,
                priority: priority,
                dueDate: dueDate

            })
        })
        const data = await response.json()

        if(response.ok){
            //console.log(data)
            dispatch({type: 'UPDATE_MODULE', payload: data})
            handleClose();
        }
    }


    return(
        <div className="flex flex-col items-center justify-center gap-4 w-full">
            <input type="text" value={todoItem} onChange={e => setTodoItem(e.target.value)} name="todoItem" aria-label="Todo Item" placeholder="Add Todo Item" className="input input-ghost w-full" />
            <div className="flex gap-2 items-center w-full">
                <select name="priority" value={priority} onChange={e => setPriority(e.target.value)} aria-label="Item Priority" className="input input-ghost">
                    <option>Select Priority</option>
                    <option value="low">Low Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} name="dueDate" className="input input-ghost"/>
            </div>
            <button className='btn btn-primary mt-6' onClick={handleAddItem}>Add Item</button>
        </div>
    )

}

const AddTimezone = ({moduleID, handleClose}) => {

    const { dispatch } = useContext(ModulesContext)



    const handleAddTimezone = async() => {

        //extract city/country by separating at , and place them into variables??

        const response = await fetch(`/worldclock/addTimezone/${moduleID}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                city: 'Melbourne',
                country: 'Australia'
            })
        })

        const data = await response.json()

            if(response.ok){
                dispatch({type: 'UPDATE_MODULE', payload: data})
                handleClose();
            }

}

return(
    <div className="flex flex-col items-center justify-center gap-4 w-full">
           <input  id="input" type="text" className="input input-ghost" placeholder="City, Country"/>
           <label for="input" className="text-black">Enter a Location</label>

        <button className="btn btn-primary mt-6" onClick={handleAddTimezone}>Add Time Zone</button>
    </div>
)

}
