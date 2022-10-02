import AddIcon from '../images/icons8-add-30.png'

const AddBtn = () => {
    return(
        <div className="addBtn">
            <span className="justify-self-end">
                <img src={AddIcon} className="h-8"/>
            </span>
        </div>
    )
}

export default AddBtn