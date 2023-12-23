import React from "react";
import "../Assets/Card.css";
import Card1 from "../Cards/Card1"
import {ZombieRobot} from '../JsonFiles/ZombieRobot'

function Cardlist2() {
 const Cards2 =  ZombieRobot.map((_ , i)=> {
     return <Card1 id={ZombieRobot[i].id}
     Name={ZombieRobot[i].Name}
     Level={ZombieRobot[i].Level}
     Description={ZombieRobot[i].Description}
     Type={ZombieRobot[i].Type}/> 
    })

  return (
    <>
    {Cards2}
    </>
  );
}

export default Cardlist2;
