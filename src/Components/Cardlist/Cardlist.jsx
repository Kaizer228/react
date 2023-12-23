import React from "react";
import "../Assets/Card.css";
import Card from "../Cards/Card"
import {Robot} from '../JsonFiles/Robot'

function Cardlist() {
 const Cards =  Robot.map((_ , i)=> {
     return <Card id={Robot[i].id}
     Name={Robot[i].Name}
     Level={Robot[i].Level}
     Description={Robot[i].Description}
     Type={Robot[i].Type}/> 
    })

  return (
    <>
    {Cards}
    </>
  );
}

export default Cardlist;
