import React, { useState } from "react";

function Toggle() {
   const [is0ff, setIsOff]= useState(true);

   function handleClick(){
    setIsOff((is0ff) => !is0ff);
   }

   const color = is0ff ? "white" : "red";

  return(
    <button style={{ background: color }} onClick={handleClick}>
      {is0ff ? "OFF" : "ON"}</button>
  ) 
}

export default Toggle;



