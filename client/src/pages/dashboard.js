import BraindumpComponent from '../components/modules/braindump';
import ScheduleComponent from '../components/modules/schedule';
import TodoComponent from '../components/modules/todo';
import { URLModal } from 'react-url-modal';
import React from 'react';
import { MyModal } from '../components/modal';
import { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar';

const Dashboard = () => {
    
   const [modulesArray, setModulesArray] = useState([])

   const getModules = async() => {
        const response = await fetch('http://localhost:2121/dashboard/')
        const json = await response.json();

        if(response.ok){
            setModulesArray(modulesArray.concat(json))
            console.log(json)
        }

   }

    useEffect(() => {
         getModules()
    }, [])

    return(
        <div >
             <URLModal
                modals={{
                    myModal: MyModal
                }}
            />

            <div id="gridArea" className="grid grid-cols-[50px_repeat(4,_1fr)] grid-rows-2 h-screen gap-4 p-r-4 overflow-y-hidden">
             
               <div className="row-span-full">
                    <Sidebar /> 
               </div>

                {/* Dashboard with Modules */}

                    {modulesArray && modulesArray.map( module => (
                        module.moduleType === 'schedule' ? <ScheduleComponent key={module._id} schedule={module}/>
                        :
                        module.moduleType === 'braindump' ? <BraindumpComponent  key={module._id} braindump={module} />
                        :
                        module.moduleType === 'todo' ? <TodoComponent key={module._id} todo={module} />
                        :
                        <p>None of this worked lol</p>
                    ))}

        
        </div>
    
    </div>
    )
}

export default Dashboard