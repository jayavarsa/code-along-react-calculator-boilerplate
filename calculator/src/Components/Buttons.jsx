import React from "react";

const Buttons =(props)=>{
    return(
        <>
        <button onClick={()=>{props.getinput(props.value)}}>{props.value}</button>
        </>
    )
}

export default Buttons