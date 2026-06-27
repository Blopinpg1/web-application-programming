/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import hidden from "./assets/hidden.png"
import show from "./assets/show.png"

const PassToggle = () => {
    const[isHidden , setIsHidden ]= useState(true);

    return (
    <div>
        <h2>Password Toggle</h2>
          <div className='wrapper'> 
             <input type={isHidden ? "password":"text"} name="password" id="password" />
        <button onClick={() =>setIsHidden(!isHidden)}>

        <img src={isHidden ? hidden : show } alt="img"  width={20} height={20} />

        </button>

          </div>
       
    </div>
  )
}

export default PassToggle
