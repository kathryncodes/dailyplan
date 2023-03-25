import { useState, useContext } from "react"
import { ModulesContext } from "../context/modulesContext";

const Sidebar = () => {

    const { dispatch } = useContext(ModulesContext);

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
         setOpen(!open);
    };

    const addBrainDump = async ()=> {
       const response = await fetch("http://localhost:2121/braindump/newBrainDump", {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    moduleType: "braindump"
                })
            })
        
        const data = await response.json();

        if(response.ok){
            console.log(data)
            console.log("connection worked")
            dispatch({type: 'ADD_MODULE', payload: data})

        }

        toggleOpen()

    }

    const addSchedule = async() => {
        const response = await fetch("http://localhost:2121/schedule/newSchedule", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                moduleType : "schedule"
            })
        })
    
        const data = await response.json();

        if(response.ok){
        console.log(data)
        console.log("connection worked")
        dispatch({type: 'ADD_MODULE', payload: data})
        }

        toggleOpen()
    }

    const addTodo = async() => {
        const response = await fetch("http://localhost:2121/todo/newList", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                moduleType : "todo"
            })
        })
    
        const data = await response.json();

        if(response.ok){
        console.log(data)
        console.log("connection worked")
        dispatch({type: 'ADD_MODULE', payload: data})
        }

        toggleOpen()
    }

    const addTimer = async() => {
        const response = await fetch("http://localhost:2121/timer/newTimer", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                moduleType : "timer"
            })
        })
    
        const data = await response.json();

        if(response.ok){
        console.log(data)
        console.log("connection worked")
        dispatch({type: 'ADD_MODULE', payload: data})
        }

        toggleOpen()
    }
   
    const addWorldClock = async() => {
        const response = await fetch("http://localhost:2121/worldclock/newWorldClock", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                moduleType : "worldclock"
            })
        })
    
        const data = await response.json();

        if(response.ok){
        console.log(data)
        console.log("connection worked")
        dispatch({type: 'ADD_MODULE', payload: data})
        }

        toggleOpen()
    }

    return(
        <div>
            {!open && <button className='btn btn-primary' onClick={toggleOpen}>|||</button>}
            
            {open && 
                <div className="w-60 h-screen z-50 bg-slate-300 flex flex-col items-center absolute" >
                    <button className="btn btn-primary mb-6 mt-2" onClick={toggleOpen}>X</button>
                    <div className="flex flex-col items-center gap-5">
                        <button className="btn btn-primary w-40" onClick={addSchedule}>New Schedule</button>
                        <button className="btn btn-primary w-40" onClick={addBrainDump}>New Brain Dump</button>
                        <button className="btn btn-primary w-40" onClick={addTodo}>New To-do List</button>
                        <button className="btn btn-primary w-40" onClick={addTimer}>New Timer</button>
                        <button className="btn btn-primary w-40" onClick={addWorldClock}>New World Clock</button>
                    </div>
                </div>
            }
        </div>

    )
}

export default Sidebar