import { TrashIcon , PlusCircleIcon } from '@heroicons/react/24/solid';
import { openModal } from 'react-url-modal';

const ScheduleComponent = (schedule) => {

function handleOpen(){
    openModal({
        name: 'myModal',
        // props: {
        //   modalType: "AddBlock",
        // }
      })
}

    const draggableStyle = {
        backgroundColor: "#bfbfd5",
        opacity: 0.8,
        backgroundImage:  "radial-gradient(#363851 0.5px, transparent 0.5px), radial-gradient(#363851 0.5px, #bfbfd5 0.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0,10px 10px",
        zIndex: "-1",
        color: "transparent"
    }

    return(
        <div className="border-4 border-base rounded-2xl row-start-1 row-span-2 col-span-1 h-full overflow-y-hidden">
            <div className="topRow h-12 flex items-center justify-between  border-b border-base">
                <div>
                    <input type="text" name="scheduleTitle" aria-label="Schedule Title" placeholder="Today's Plan" className="input input-ghost">{schedule.title}</input>
                </div> {/* Module title */}
                <div className="flex items-center justify-end px-3"> {/* edit and delete buttons - should they be their own module? */}
                    <button onClick={handleOpen}>
                        <PlusCircleIcon className="h-6 w-6 mx-1" />
                    </button> {/* add icons for both, set routes */}
                    <button className="deleteModuleBtn">
                        <TrashIcon className="h-6 w-6"/>
                    </button>
                </div>
            </div>

             <div className="moduleMainContent h-full flex flex-row w-full border-b border-dotted border-base">
               
                <div className=" w-24 m-0 p-0 flex flex-col justify-between">

                    <div id="topY" className='  border-t border-b border-base border-dotted'>6:00</div>
                    <div id="lowY" className=' border-t  border-b border-base border-dotted '>7:00</div>
                    <div className='  border-t border-b border-base border-dotted '>8:00</div>
                    <div className=' border-t border-b border-base border-dotted  '>9:00</div>
                    <div className=' border-t border-b border-base border-dotted   '>10:00</div>
                    <div className='  border-t border-b border-base border-dotted   '>11:00</div>
                    <div className='  border-t  border-b border-base border-dotted '>12:00</div>
                    <div className=' border-t  border-b border-base border-dotted  '>1:00</div>
                    <div className='  border-t border-b border-base border-dotted  '>2:00</div>
                    <div className='  border-t border-b border-base border-dotted   '>3:00</div>
                    <div className=' border-t border-b border-base border-dotted  '>4:00</div>
                    <div className=' border-t border-b border-base border-dotted    '>5:00</div>
                    <div className=' border-t  border-b border-base border-dotted '>6:00</div>
                    <div className=' border-t border-b border-base border-dotted  '>7:00</div>
                    <div className=' border-t border-b border-base border-dotted   '>8:00</div>
                    <div className=' mb-12 border-t  border-b border-base border-dotted   '>9:00</div>

                </div>
                <div className=" w-full m-0 p-0 " style={draggableStyle}>This is the second column</div>
                {/* need a div for times (rows? 1x1 table?) */}
                {/* another div for droppable area for blocks --> same height as times, width to fill module */}

            </div> 
        </div>
    )
}

// const BlockComponent = (props) => {
   
//     const topY = document.getElementById("topY")
//     const lopY = document.getElementById("lopY")

//     const hours = props.hours
//     const minutes = props.minutes
   
//     function calculateHeight(hours, minutes){
       
//     }

//     return(

//         <div className="border border-primary">
//             This is the time block
//         </div>
//     )
// }

export default ScheduleComponent