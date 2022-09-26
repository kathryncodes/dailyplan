
{/* WHERE TO ADD BLOCKS
    --> component?
    --> set blocks array to none?
*/}

const ScheduleComponent = () => {
    return(
        <div>
            <div className="topRow">
                <div></div> {/* Module title */}
                <div> {/* edit and delete buttons - should they be their own module? */}
                    <span className="editModuleBtn"></span> {/* add icons for both, set routes */}
                    <span className="deleteModuleBtn"></span>
                </div>
            </div>
            <div className="moduleMainContent">
                {/* need a div for times (rows? 1x1 table?) */}
                {/* another div for droppable area for blocks --> same height as times, width to fill module */}
            </div>
            <div className="bottomRow"></div> {/* add bottom row for styling?? */}
        </div>
    )
}

const BlockComponent = () => {

}

export default ScheduleComponent