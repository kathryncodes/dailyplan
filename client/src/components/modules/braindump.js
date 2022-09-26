

const BraindumpComponent = () => {
    return(
        <div className="braindumpModule" >
            <div className="topRow">
                <input type="text" placeholder="Brain Dump" name="braindumpTitle" id="braindumpTitle">{/*This is where braindump.title would go*/} </input>  {/*How to make it an input but keep the value displayed and save to collection?*/} 
                <span></span> {/*delete icon --> Make delete icon/edit icon into its own component??*/}
            </div>
            <div>
                <input type="text"></input> {/*Make whole div into a stylized text box --> use textarea tags instead of input?*/}
            </div>
        </div>
    )
}

export default BraindumpComponent