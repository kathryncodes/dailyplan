import { Modal} from 'react-url-modal/dist/Modal';

export const MyModal = (props) => {

    return(
        <Modal {...props} className="modal h-2/4">
            <div className="" >

            <form className='' action="/schedule/addBlock">
                <input type="text" name="task" aria-label="task" placeholder="Task" className="input input-ghost w-full mb-6" />
                <div className='text-black'>
                    Duration
                        <input type="number" name="hours" aria-label='house' placeholder="Hours" className='mx-5 input input-ghost' />
                        <select name="minutes" aria-label='minutes' className="mx-5 select select-ghost ">
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={45}>45 minutes</option>
                        </select>
                </div>
                <button type="submit" className="btn btn-primary mt-6">Add Task</button>
                </form> 
            </div>
         </Modal>
    )
   
  };

const AddTimeBlock = () => {
    
    return(
        <div>
            <form>
                <input type="text" name="task" aria-label="task" placeholder="Task" className="input input-ghost" />
                <div>
                    Duration:
                        <input type="number" name="hours" aria-label='house' placeholder="Hours" />
                        <select name="minutes" aria-label='minutes'>
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={45}>45 minutes</option>
                        </select>
                </div>
            </form>
        </div>
    )
}
