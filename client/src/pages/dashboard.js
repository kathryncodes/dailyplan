import BraindumpComponent from '../components/modules/braindump';
import ScheduleComponent from '../components/modules/schedule';
import TodoComponent from '../components/modules/todo';
import TimerComponent from '../components/modules/timer';
import WorldClockComponent from '../components/modules/worldclock';
import React from 'react';
import { useEffect, useContext } from 'react'
import Sidebar from '../components/sidebar';
import { ModulesContext } from '../context/modulesContext';

const Dashboard = () => {

    const {modules, dispatch} = useContext(ModulesContext);
  
    useEffect(() => {
        const getModules = async() => {
            const response = await fetch('/dashboard/')
            const json = await response.json();

            if(response.ok){
                console.log(json)
                dispatch({type: 'GET_MODULES', payload: json})
            }

    }
    getModules() 
   }, [ModulesContext])
    
    return(
        <div >

            <div id="gridArea" className="grid grid-cols-[50px_repeat(4,_1fr)] grid-rows-2 h-screen gap-4 p-r-4 overflow-y-hidden">
             
               <div className="row-span-full">
                    <Sidebar /> 
               </div>

                {/* Dashboard with Modules */}

                    {modules && modules.map( module => (
                        module.moduleType === 'schedule' ? <ScheduleComponent key={module._id} schedule={module} moduleID={module._id}/>
                        :
                        module.moduleType === 'braindump' ? <BraindumpComponent  key={module._id} braindump={module} moduleID={module._id}/>
                        :
                        module.moduleType === 'todo' ? <TodoComponent key={module._id} todo={module} moduleID={module._id} />
                        :
                        module.moduleType === 'timer' ? <TimerComponent key={module._id} timer={module} moduleID={module._id} />                        
                        :
                        module.moduleType === 'worldclock' ? <WorldClockComponent key={module._id} worldclock={module} moduleID={module._id} /> 
                        :
                        null
                    ))}  
        </div>
    
    </div>
    )
}

export default Dashboard