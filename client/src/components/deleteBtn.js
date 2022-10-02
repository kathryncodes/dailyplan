import deleteIcon from '../images/icons8-remove-64.png'

const DeleteBtn = () => {
    return(
        <div className="deleteBtn">
            <span className="justify-self-end">
                <img src={deleteIcon} className="h-9"/>
            </span>
        </div>

    )
}

export default DeleteBtn