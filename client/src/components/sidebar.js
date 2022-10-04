import { useState } from "react"



//EXTRAS: display welcome user message

const Sidebar = () => {

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

        }

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

        }
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
        }
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
                    </div>
                </div>
            }
        </div>

    )
}

export default Sidebar