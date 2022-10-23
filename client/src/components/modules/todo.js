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
        console.log(todo.moduleID)
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

    //Delete Item function

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
                
                {items.map(item => <TodoItem text={item.text} key={item._id} itemID={item._id} listID={moduleID}/> )}

                
            </div>
            <ReactModal isOpen={isOpen} style={modalStyle} >
                <MyModal moduleID={todo.moduleID} modalType="AddTodoItem" handleClose={handleClose}/>
                <button onClick={handleClose} className="btn btn-primary">Close</button>
            </ReactModal>
        </div>
    )
}

const TodoItem = (props) => {
    // if classname toggles to check, change styles
    const itemID = props.itemID
    const listID = props.listID

    const handleDeleteItem = async() => {
        const response = await fetch(`/todo/deleteItem/${listID}&${itemID}`, { method: 'PUT'})
        const json = await response.json()

        if (response.ok){
            console.log("response ok")
            console.log(json)
        }

        
    }

    return( 
        <div className="flex flex-row justify-between h-12 px-5 items-center  border-base">
            <div className="flex ">
            <input type="checkbox" className="checkbox unchecked" />
            <p className="text-base font-bold pl-2" id={itemID}>{props.text}</p> 
            </div>
            <button className="deleteItemBtn" onClick={handleDeleteItem}>
                        <TrashIcon className="h-6 w-6"/>
             </button>
        </div>
    )
}

export default TodoComponent