import { TrashIcon , PlusCircleIcon } from '@heroicons/react/24/solid'
import { openModal } from 'react-url-modal';

const TodoComponent = (todo) => {

    
    function handleOpen(){
        openModal({
            name: 'myModal',
            params: {
              modalType: "AddTodoItem",
              moduleID : todo.moduleID
            }
          })
    }
    
    const moduleID = todo.moduleID

    const handleDelete = async() => {
        const response = await fetch(`http://localhost:2121/todo/deleteList/${moduleID}`, {
            method: 'DELETE'
        })

        const data = await response.json()

        if(response.ok){
            console.log(data)
        }
    }


    return(
        <div className="border-4 border-base col-span-1 row-span-1 rounded-2xl">
            <div className="topRow flex justify-between px-5 items-center border-b border-base">
                <input type="text" className="input input-ghost" aria-label="ToDo List" placeholder="Things to do" />
                <div className="flex items-center">
                <button onClick={handleOpen}>
                        <PlusCircleIcon className="h-6 w-6 mx-1"/>
                </button> {/* add icons for both, set routes */}
                    <button className="deleteModuleBtn" onClick={handleDelete}>
                        <TrashIcon className="h-6 w-6"/>
                    </button>
                </div>
            </div>
            <div className="listArea rounded-b-lg h-full">
                {/* map over items array and render a TodoItem component for each, pass in props of itemText and key */}
                <TodoItem text="Get Groceries askdbnahsd"/>
                <TodoItem text=""/>
                <TodoItem text="Get Drycleaning"/>
                <TodoItem text="Get Drycleaning"/>
                <TodoItem text="Get Drycleaning"/>
                <TodoItem text="Get Drycleaning"/>
                <TodoItem text="Get Drycleaning"/>
                {/* map over items array and generate ToDoItem component for each one */}
            </div>
        </div>
    )
}

const TodoItem = (props) => {

    // if classname toggles to check, change styles

    return( 
        <div className="flex flex-row justify-between h-12 px-5 items-center  border-base">
            <div className="flex ">
            <input type="checkbox" className="checkbox unchecked" />
            <p className="text-base font-bold pl-2" id={props.key}>{props.text}</p> 
            </div>
            <button className="deleteItemBtn">
                        <TrashIcon className="h-6 w-6"/>
                    </button>
        </div>
    )
}

export default TodoComponent