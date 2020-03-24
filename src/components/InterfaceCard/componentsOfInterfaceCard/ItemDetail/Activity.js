import React,{useState} from 'react'

 


export default ()=>{
    const [activity, setActivity]=useState("")
    return(
      <div className="activity">
            
            <p>LL</p>
            <h2>Name</h2>
            <h6>23 minute ago</h6>
            <div>
                <span>Comment</span>
                <div>
                <span>Imoji</span> - <span>Edit</span> -<span>Delete</span>
                </div>
            </div>
        </div>
    )
}