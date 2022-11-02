import { React, useContext, useEffect, useState } from 'react'
import { ModulesContext } from '../../context/modulesContext'
import { TrashIcon } from '@heroicons/react/24/solid'

const TimerComponent = ({moduleID}) => {

const {modules, dispatch} = useContext(ModulesContext);

const [ timer, setTimer ] = useState(0)
const [ timerIsRunning, setTimerIsRunning ] = useState(false)
const [ timerIsPaused, setTimerIsPaused ] = useState(false)
const [seconds, setSeconds] = useState(0)

let time;

function setTime(e){
    time = e.target.value
    setTimer(time)
}

function startTimer(){
    setTimerIsRunning(true)
}

function pauseTimer(){
    setTimerIsPaused(true)

}

function resetTimer(){
    setTimerIsPaused(false)
    setTimerIsRunning(false)
}

useEffect(() => {
    

    
}, [timerIsPaused, timerIsRunning])

const handleDeleteTimer = async() => {
    const response = await fetch(`/timer/deleteTimer/${moduleID}`, {
        method: 'DELETE'
       })

       const data = await response.json()

       if(response.ok){
        console.log("deleted timer")
        dispatch({type: 'DELETE_MODULE', payload: data})
       }
}

    return(
        <div className="border-4 border-base col-span-1 row-span-1 rounded-2xl">

            <div className="topRow flex justify-between items-center w-full px-2 border-b">
           
           <h2 className='text-xl mt-2 mb-2 ml-4 font-bold'>Timer</h2>
                   <button className="deleteModuleBtn" onClick={handleDeleteTimer}>
                       <TrashIcon className="h-6 w-6"/>
                   </button>
           
           </div>       

            <span className=''>
                { timerIsRunning || timerIsPaused ? 
                    <span className='countdown font-mono text-8xl mt-14'>
                        <span id="timerMinutes" style={{"--value":`${timer}`}} /> :
                        <span id="timerSeconds"  style={{"--value":`${seconds}`}} />  
                    </span> 
                : <input 
                    type="number" 
                    className='input input-ghost h-20 text-6xl w-[75%] mt-14 text-center' 
                    placeholder='25:00' 
                    onChange={setTime}
                  />

                }
            </span>

            <div className='flex flex-row justify-around mx-3 mt-14'>
                { timerIsRunning ? <button onClick={pauseTimer} className='btn btn-secondary btn-lg text-lg'> Pause </button>
                : timerIsPaused ? <button onClick={startTimer} className='btn btn-accent btn-lg text-lg'> Start </button>
                : <button onClick={startTimer} className='btn btn-accent btn-lg text-lg'> Start </button>
                }
                <button onClick={resetTimer} className='btn btn-accent btn-lg text-lg' > Reset </button> {/* Reset Button */}
            </div>
        </div>
    )

}

export default TimerComponent