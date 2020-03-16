import React,{useState} from 'react'
import Plane from './ItemDetail/Plane'

export default ({cardName, id,titleName})=>{
    // console.log("inside item", cardName,id)
    const [isPop, setIsPop] =useState(false)
    return(
        <div className="item">
            {/* {cardName} */}
            {!isPop
            ?<div onClick={()=>setIsPop(!isPop)}> {cardName}</div>
            :<div >{cardName}  <Plane cardName={cardName} titleName={titleName} isPop={isPop} setIsPop={setIsPop}/></div>}
            
        </div>
    )
}