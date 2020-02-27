import React from 'react'

export default ({cardName, id})=>{
    console.log("inside item", cardName,id)
    return(
        <div className="item">{cardName}</div>
    )
}