import React from "react";
import "../Assets/Card.css";
import PetCard from "../Cards/PetCard"
import {Pet} from '../JsonFiles/Pet'

function Cardlist3() {
 const Cards3 =  Pet.map((_ , i)=> {
     return <PetCard id={Pet[i].id}
     Name={Pet[i].Name}
     Level={Pet[i].Level}
     Description={Pet[i].Description}
     Type={Pet[i].Type}/> 
    })

  return (
    <>
    {Cards3}
    </>
  );
}

export default Cardlist3;
