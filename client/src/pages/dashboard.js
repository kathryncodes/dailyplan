import BraindumpComponent from '../components/modules/braindump';
import ScheduleComponent from '../components/modules/schedule';
import TodoComponent from '../components/modules/todo';
import { URLModal } from 'react-url-modal';
import React from 'react';
import { MyModal } from '../components/modal';
import { useEffect, useState } from 'react'

const Dashboard = () => {
    
   const [modulesArray, setModulesArray] = useState([])

   const getModules = async() => {
        const response = await fetch('http://localhost:2121/dashboard/getDashboard')
        const json = await response.json();

        if(response.ok){
            console.log("response ok")   
            setModulesArray(modulesArray.concat(json))
        }

   }

    useEffect(() => {
         getModules()
         console.log("this is use effect firing")
    }, [])

    return(
        <div >
             <URLModal
                modals={{
                    myModal: MyModal
                }}
            />

            <div id="gridArea" className="grid grid-cols-[50px_repeat(4,_1fr)] grid-rows-2 gap-4 px-4 border border-accent h-screen overflow-y-hidden">
               <div className="row-span-full">
                <button className='btn btn-primary'>|||</button>
               </div>
                    {modulesArray && modulesArray.map( module => (
                        module.moduleType === 'schedule' ? <ScheduleComponent key={module._id} schedule={module}/>
                        :
                        module.moduleType === 'braindump' ? <BraindumpComponent  key={module._id} braindump={module} />
                        :
                        module.moduleType === 'todo' ? <TodoComponent key={module._id} todo={module} />
                        :
                        <p>None of this worked lol</p>
                    ))}


              {/* CONDITIONAL NOT CURRENTLY WORKING  */}
               {/* {modulesArray && modulesArray.map((module) => (
                    () => {
                        switch(module.moduleType){
                            case "schedule" :
                                return <ScheduleComponent />
                            case "todo" :
                                return <TodoComponent />
                            case "braindump" :
                                return <BraindumpComponent />
                        }
                    }
               ))} */}

                {/* CONDITIONAL RENDERING IS NOT WORKING */}
               {/* {modulesArray.forEach(module => ( 
                    () => {
                        {module.moduleType === "schedule" && <ScheduleComponent key={module._id} schedule={module} />}
                        {module.moduleType === "braindump" && <BraindumpComponent key={module._id} braindump={module} />}
                        {module.moduleType === "todo" && <TodoComponent key={module._id} todo={module} />}
                    }
                ))} */}

                {/* {modulesArray.length === 0 && <WelcomeComponent />} */}
            </div>   
        </div>
    )
}

export default Dashboard