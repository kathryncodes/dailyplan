import { React, useContext, useEffect, useState, useRef } from 'react'
import { ModulesContext } from '../../context/modulesContext'
import { TrashIcon } from '@heroicons/react/24/solid'

const TimerComponent = ({moduleID}) => {

    const {modules, dispatch} = useContext(ModulesContext);

    const [ timerIsRunning, setTimerIsRunning ] = useState(false)
    const [ timerIsPaused, setTimerIsPaused ] = useState(false)
    const [ minutes, setMinutes ] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const time = useRef(0)
    const timeRemaining = useRef(0)

    function setTime(e){
        time.current = Number(e.target.value)
        console.log(typeof time)
        timeRemaining.current = time.current * 60
        console.log(`Time Remaining: ${timeRemaining.current}`)
        setMinutes(timeRemaining.current / 60)
    }

 
    function startTimer(){
        setTimerIsPaused(false)
        setTimerIsRunning(true)
    }

    function pauseTimer(){
        setTimerIsPaused(true)
        setTimerIsRunning(false)
    }

    //Resume Timer 
    function resumeTimer(){
        setTimerIsPaused(false)
        setTimerIsRunning(true)
        //
    }

    function resetTimer(){
        clearInterval(countInt.current)
        setTimerIsPaused(false)
        setTimerIsRunning(false)
        time.current = 0
        // timeRemaining.current = 0
        console.log(timeRemaining.current)
    }

    //create countdown interval
    const countInt = useRef(0)

    const countingDown = () => { 
        countInt.current = setInterval(() => {

            timeRemaining.current--

            setMinutes(Math.floor(timeRemaining.current / 60))
            setSeconds(Math.floor(timeRemaining.current % 60))

            if(timeRemaining.current == 0){
                resetTimer()
            }
        
        }, 1000)
       
    }

    useEffect(() => {

        if(timerIsRunning){
            countingDown()
            console.log("running")
        }
        else if(timerIsPaused) {
            clearInterval(countInt.current);
            console.log("paused")
            setMinutes(Math.floor(timeRemaining.current / 60))
            setSeconds(Math.floor(timeRemaining.current % 60))
            console.log(`time paused at: ${minutes} : ${seconds}`)
        }
        
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

                    <span className='font-mono text-6xl '>
                        <span id="timerMinutes">
                             {minutes < 10 ? `0${minutes}` : minutes}
                        </span> :
                        <span id="timerSeconds">
                            { //seconds < 0 ? setSeconds(59)
                             seconds < 10 ? `0${seconds}` 
                             :seconds
                            }
                        </span>  
                    </span> 
                : <input 
                    type="number" 
                    className='input input-ghost h-20 text-6xl w-[75%] mt-14 text-center' 
                    placeholder='25' 
                    onChange={setTime}
                  />

                }
            </span>

            <div className='flex flex-row justify-around mx-3 mt-14'>
                { timerIsRunning ? <button onClick={pauseTimer} className='btn btn-secondary btn-lg text-lg'> Pause </button>
                : timerIsPaused ? <button onClick={resumeTimer} className='btn btn-accent btn-lg text-lg'> Resume </button>
                : <button onClick={startTimer} className='btn btn-accent btn-lg text-lg'> Start </button>
                }
                <button onClick={resetTimer} className='btn btn-accent btn-lg text-lg' > Reset </button> {/* Reset Button */}
            </div>
        </div>
    )

}

export default TimerComponent