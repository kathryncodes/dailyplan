import { TrashIcon , PlusCircleIcon } from '@heroicons/react/24/solid'
import { MyModal } from '../modal';
import { useState, useEffect, useContext } from 'react';
import { ModulesContext } from '../../context/modulesContext';

import ReactModal from 'react-modal'
ReactModal.setAppElement('body')

const TodoComponent = (todo) => {
    
    const moduleID = todo.moduleID
    const {modules, dispatch} = useContext(ModulesContext);

    //get list and list items from modules collection
    const list = modules.filter(module => module._id == moduleID)
    const items = list[0].items

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

    //Delete List function
    const handleDeleteList = async() => {
        const response = await fetch(`/todo/deleteList/${moduleID}`, {
            method: 'DELETE'
        })

        const data = await response.json()

        if(response.ok){
            console.log(data)
            dispatch({type: 'DELETE_MODULE', payload: data})
        }
    }

    return(
        <div className="border-4 border-base col-span-1 row-span-1 rounded-2xl">
            <div className="topRow flex justify-between px-5 items-center border-b border-base">
            <h2 className='text-xl mt-2 mb-2 ml-4 font-bold'>Things To Do</h2>
                <div className="flex items-center">
                <button >
                        <PlusCircleIcon className="h-6 w-6 mx-1" onClick={handleOpen}/>
                </button> {/* add icons for both, set routes */}
                    <button className="deleteModuleBtn" onClick={handleDeleteList}>
                        <TrashIcon className="h-6 w-6"/>
                    </button>
                </div>
            </div>
            <div className="listArea rounded-b-lg h-full">
                
                {items.map(item => <TodoItem text={item.text} key={item._id} itemID={item._id} listID={moduleID} priority={item.priority} dueDate={item.dueDate}/> )}

                
            </div>
            <ReactModal isOpen={isOpen} style={modalStyle} >
                <MyModal moduleID={todo.moduleID} modalType="AddTodoItem" handleClose={handleClose}/>
                <button onClick={handleClose} className="btn btn-primary">Close</button>
            </ReactModal>
        </div>
    )
}

const TodoItem = (props) => {
    const itemID = props.itemID
    const listID = props.listID
    const priority = props.priority
    const dueDate = props.dueDate
    //const formatted = dueDate.toLocaleDateString('en-gb', {month: 'short', day: 'numeric'})

    const {dispatch} = useContext(ModulesContext);

    const [completed, setCompleted] = useState(false)

    const completedStyle = {
        textDecoration: 'line-through'
    }

    const toggleComplete = () => {
        setCompleted(!completed)
    }

    useEffect(() => {
        const checkComplete = JSON.parse(localStorage.getItem(itemID))
        setCompleted(checkComplete)
        
    }, [])

    useEffect(() => {
        localStorage.setItem(`${itemID}`, completed == true ? true : false)
    }, [completed])


    const handleDeleteItem = async() => {
        const response = await fetch(`/todo/deleteItem/${listID}&${itemID}`, { method: 'PUT'})
        const data = await response.json()

        if (response.ok){
            console.log("response ok")
            dispatch({type: 'UPDATE_MODULE', payload: data})
            console.log(data)
        }

        
    }

    const priorityStyle={
        backgroundColor: priority == "low" ? 'green' : 'red',
        fontSize: "13px",
        color: 'white',
        padding: '2px 8px',
        borderRadius: '15px'

    }

    return( 
        <div className='mb-2'>
        <div className="flex justify-between h-8 px-5 items-center  border-base">
            <div className="flex mb-0 pb-0">
                <input type="checkbox" className={`checkbox`} checked={completed ? "checked" : null} onClick={toggleComplete} />
                <p className="text-base font-bold pl-2" id={itemID} style={completed ? completedStyle : null}>{props.text}</p>
            </div>
            <button className="deleteItemBtn" onClick={handleDeleteItem}>
                        <TrashIcon className="h-6 w-6"/>
            </button> 
        </div>
        <div className="flex justify-left ml-12 ">
                    <span className="font-bold" style={priority.length > 1 ? priorityStyle : null}>{priority.length > 1 ? `${priority} priority`  : ""}</span>
                    {/* <span style={dueDateStyle}>{dueDate}</span> */}
        </div>
        </div>
    )
}

export default TodoComponent