import React, { useState } from "react";
import Buttons from "./Buttons";
import './button.css'

function DisplayScreen(){
    let [inputvalue , setinputvalue] = useState('')
    let [result,setresult] = useState(0)

    function getinput(value){
        setinputvalue((prev)=>{return prev+value})

    }

    function deleteinput(){
        setinputvalue(inputvalue.slice(0,-1))
    }

    function clearinput(){
        setinputvalue("")
        setresult(0)
    }

    function computevalue(){
        try {
            setresult(eval(inputvalue))
            
        } catch (error) {
            setresult("Error")
        }
    }

    return(
      <>
        <div className="display_screen">
            <input type="text" placeholder="0" value={inputvalue} readOnly/>
            <input type="text" placeholder="0" value={result} readOnly/>

        </div>
        <div className="buttons_container">
            < Buttons value={'+'} getinput={getinput}/>
            < Buttons value={'-'} getinput={getinput} />
            < Buttons value={'/'} getinput={getinput}/>
            < Buttons value={'*'} getinput={getinput} />
            < Buttons value={'1'} getinput={getinput}/>
            < Buttons value={'2'} getinput={getinput}/>
            < Buttons value={'3'} getinput={getinput}/>
            < Buttons value={'%'} getinput={getinput}/>
            < Buttons value={'4'} getinput={getinput}/>
            < Buttons value={'5'} getinput={getinput} />
            < Buttons value={'6'} getinput={getinput}/>
            < Buttons value={'AC'} getinput={clearinput} />
            < Buttons value={'7'} getinput={getinput}/>
            < Buttons value={'8'} getinput={getinput}/>
            < Buttons value={'9'} getinput={getinput}/>
            < Buttons value={'DEL'} getinput={deleteinput}/>
            < Buttons value={'0'} getinput={getinput}/>
            < Buttons value={'.'} getinput={getinput}/>
            < Buttons value={'='} getinput={computevalue} />
        </div>
      </>
    )
  }
  
  export default DisplayScreen