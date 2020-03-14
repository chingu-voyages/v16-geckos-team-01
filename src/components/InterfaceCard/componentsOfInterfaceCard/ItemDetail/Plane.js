import React from 'react'

export default ({cardName,isPop, setIsPop})=>{
    return(
        <div className="plane">{cardName}  <i  onClick={()=>{setIsPop(!isPop)}} className="fas fa-times fa-xs"></i></div>
    )
}