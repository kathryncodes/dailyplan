import { Modal} from 'react-url-modal/dist/Modal';
import { useContext } from 'react';
import { ModulesContext } from '../context/modulesContext';

export const MyModal = ({params}) => {
    return(
        <Modal {...params} className="modal h-2/4">
            <div>
                {params.modalType === 'AddBlock' && <AddTimeBlock props={params}/>}
                {params.modalType === 'AddTodoItem' && <AddTodoItem props={params}/>}
            </div>
        </Modal>
    )
   
  };

const AddTimeBlock = ({props}) => {

    const moduleID = props.moduleID

    const handleAddBlock = async() => {

        const response = await fetch(`http://localhost:2121/schedule/addBlock/${moduleID}` , {
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
            <div>
                <input type="text" name="task" aria-label="task" placeholder="Task" className="input input-ghost" />
                <div>
                    Duration:
                        <input type="number" name="hours" aria-label='house' placeholder="Hours" />
                        <select name="minutes" aria-label='minutes'>
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={45}>45 minutes</option>
                        </select>
                </div>
                <button className='btn btn-primary' onClick={handleAddBlock}>Add Time Block</button>
            </div>
    )
}

const AddTodoItem = ({props}) => {

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
        <div>
            <input type="text" name="todoItem" aria-label="Todo Item" placeholder="Add Todo Item" className="input input-ghost" />
            <div>
                <select name="priority" aria-label="Item Priority">
                    <option value="low">Low Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <input type="date" name="dueDate" />
            </div>
            <button className='btn btn-primary' onClick={handleAddItem}>Add Item</button>
        </div>
    )

}
