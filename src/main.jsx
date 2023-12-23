import React from "react";
import ReactDOM from "react-dom/client";
 

import Header from "/src/Components/Assets/Header.jsx"
import Cardlist from "/src/Components/Cardlist/Cardlist.jsx"
import Cardlist2 from  "/src/Components/Cardlist/Cardlist2.jsx"
import Cardlist3 from  "/src/Components/Cardlist/Cardlist3.jsx"
import Cardlist4 from  "/src/Components/Cardlist/Cardlist4.jsx"
 

import "./main.css";

 
ReactDOM.createRoot(document.getElementById("root")).render(
 
  <React.StrictMode>
    
    <Header />
    <div className="Container">

   <Cardlist/>
   <Cardlist2/>  
   <Cardlist3/>
   <Cardlist4/>
   
    </div>
  </React.StrictMode>
  
);
