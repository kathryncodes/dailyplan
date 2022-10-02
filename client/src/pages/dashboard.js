
import BraindumpComponent from '../components/modules/braindump';
import ScheduleComponent from '../components/modules/schedule';
import TodoComponent from '../components/modules/todo';
import { URLModal } from 'react-url-modal';
import React from 'react';
import { MyModal } from '../components/modal';

const Dashboard = () => {
    
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
               <ScheduleComponent  />
                <BraindumpComponent /> 
                <TodoComponent />
             
            </div>   
        </div>
    )
}

export default Dashboard