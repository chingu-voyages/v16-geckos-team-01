import React,{useState} from 'react'
import Plane from './ItemDetail/Plane'

export default ({cardName, id, titleName, members})=>{
 
    const [isPop, setIsPop] =useState(false)
   
    const promptControl = isPop
    && ( 
        <div>
            <div className="innerScreen"   />
            <Plane 
            cardName={cardName} 
            titleName={titleName} 
            isPop={isPop} 
            setIsPop={setIsPop} 
            members={members}
            />
        </div>
    );
    return(
        <div className="item">
         
             <div onClick={()=>setIsPop(true)}> {cardName}</div>
             {promptControl}
          </div>
       
    )
}