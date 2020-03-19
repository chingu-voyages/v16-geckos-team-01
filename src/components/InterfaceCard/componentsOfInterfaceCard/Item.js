import React,{useState} from 'react'
import Plane from './ItemDetail/Plane'

export default ({cardName, id, titleName, members})=>{
    // console.log("inside item", cardName,id)
    const [isPop, setIsPop] =useState(false)
    console.log(isPop)
    return(
        <div className="item">
             <div onClick={()=>setIsPop(true)}> {cardName}</div>
             {isPop===true&&<Plane cardName={cardName} titleName={titleName} isPop={isPop} setIsPop={setIsPop} members={members}/>}
        </div>
    )
}