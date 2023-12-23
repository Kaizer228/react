import React from "react";
import "../Assets/Card.css";
import SideKick from "../Cards/SideKick";
import { Assistant } from "../JsonFiles/Assistant";
 

function Cardlist4() {
 const Cards4 =  Assistant.map((_ , i)=> {
     return <SideKick id={Assistant[i].id}
     Name={Assistant[i].Name}
     Level={Assistant[i].Level}
     Description={Assistant[i].Description}
     Type={Assistant[i].Type}/> 
    })

  return (
    <>
    {Cards4}
    </>
  );
}

export default Cardlist4;
