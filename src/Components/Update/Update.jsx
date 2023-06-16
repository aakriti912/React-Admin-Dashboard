import React from 'react'
import { updatedata } from './updatedata'
import "./Update.css"

export default function Update() {
  return (
    <div className='update'>
      <h1 className='h1'>Updates</h1>
      <div className='updatesection'>
        {
updatedata.map((items)=>{
  return(
    <div>
      <img src={items.URL} alt='imgae'/>
      <span>{items.name}</span>
      <p>{items.comment}</p>
      <hr style={{color:"brown"}}></hr>
    </div>
  )
})
        }

      </div>
   
   
    </div>
  )
}

