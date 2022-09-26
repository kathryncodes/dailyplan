
const TodoComponent = () => {
    return(
        <div>
            <div className="topRow">

            </div>
            <div className="listArea">
                {/* map over items array and generate ToDoItem component for each one */}
            </div>
        </div>
    )
}

const TodoItem = () => {
    return( 
        <div>
            <input type="checkbox"/>
            <p></p> {/* item.text goes in here*/}
            <span className="deleteItemBtn"></span> {/* delete item btn route */}
        </div>
    )
}