import React from "react";

export const MyModal = (props) => {



    return(
        <div className="flex flex-col">
            <div > 
                    <div className="">
                        {props.modalType === 'AddBlock' && <AddTimeBlock moduleID={props.moduleID}/>}
                        {props.modalType === 'AddTodoItem' && <AddTodoItem moduleID={props.moduleID}/>}
                    </div>
            </div>
        </div>
    )
   
  };


const AddTimeBlock = (props) => {

    const moduleID = props.moduleID

    const handleAddBlock = async() => {

        console.log("click")
        const response = await fetch(`/schedule/addBlock/${moduleID}` , {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                task: "this is the task"
            })
        })
        const data = await response.json()

        if(response.ok){
            console.log(data)
            console.log("module id got passed through" + moduleID)
        }
        
    }
    
    return(
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <input type="text" name="task" aria-label="task" placeholder="Task" className="input input-ghost w-full" />
                <div className="flex gap-2 items-center w-full">
                    Duration:
                        <input type="number" name="hours" aria-label='house' placeholder="Hours" className="input input-ghost w-28"/>
                        <select name="minutes" aria-label='minutes' className="input input-ghost w-full">
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={45}>45 minutes</option>
                        </select>
                </div>
                <button className='btn btn-primary mt-6' onClick={handleAddBlock}>Add Time Block</button>
            </div>
    )
}

const AddTodoItem = (props) => {

    const moduleID = props.moduleID

    const handleAddItem = async() => {
       
        const response = await fetch(`http://localhost:2121/todo/addItem/${moduleID}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
        //get value from form below and add
               test: "testing"
            })
        })
        const data = response.json()

        if(response.ok){
            console.log(data)
        }
    }


    return(
        <div className="flex flex-col items-center justify-center gap-4 w-full">
            <input type="text" name="todoItem" aria-label="Todo Item" placeholder="Add Todo Item" className="input input-ghost w-full" />
            <div className="flex gap-2 items-center w-full">
                <select name="priority" aria-label="Item Priority" className="input input-ghost">
                    <option value="low">Low Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <input type="date" name="dueDate" className="input input-ghost"/>
            </div>
            <button className='btn btn-primary mt-6' onClick={handleAddItem}>Add Item</button>
        </div>
    )

}
