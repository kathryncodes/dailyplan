import { TrashIcon , PlusCircleIcon } from '@heroicons/react/24/solid'
//import uuidv4

const TodoComponent = (todo) => {

    //get itemText from backend & create array
    //deleteItem handler
    //delete list handler
    //add item handler

    //items array max length = 7

//add UUID in item model, pass that through props, then set key to UUID


    //map over items array and

    return(
        <div className="border-4 border-base col-span-1 row-span-1 rounded-2xl">
            <div className="topRow flex justify-between px-5 items-center border-b border-base">
                <input type="text" className="input input-ghost" aria-label="ToDo List" placeholder="Things to do" />
                <div className="flex items-center">
                <button className="addBTodoBtn modal-button">
                        <PlusCircleIcon className="h-6 w-6 mx-1"/>
                    </button> {/* add icons for both, set routes */}
                    <button className="deleteModuleBtn">
                        <TrashIcon className="h-6 w-6"/>
                    </button>
                </div>
            </div>
            <div className="listArea rounded-b-lg h-full">
                {/* map over items array and render a TodoItem component for each, pass in props of itemText and key */}
                <TodoItem text="Get Groceries askdbnahsd"/>
                <TodoItem text="Get Drycleaning"/>
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