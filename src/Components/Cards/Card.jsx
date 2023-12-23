import React, { useState, useEffect } from "react";
import "../Assets/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const [numberOfStars, setNumberOfStars] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumberOfStars(Math.floor(Math.random() * 5) + 1);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const stars = Array.from({ length: numberOfStars }, (_, index) => (
    <span key={index} className="star">
      <FontAwesomeIcon icon={faStar} />
    </span>
  ));

  return (
    <>
      <div className="Card" id="Robot">
        <img
          className="Img"
          src={`https://robohash.org/${props.id}set=set2`}
          alt=""
        />
        <h1 className="Name">{props.Name}</h1>
        <h4 className="Name">{props.Type}</h4>
        <div className="Stars">{stars}</div>
        <h3 className="Level">Level : {props.Level}</h3>
        <p className="Description">{props.Description}</p>
        <a className="A-tag" >
        <button className="button">See Stats</button>
        </a>
      </div>

     
    </>
  );
}

export default Card;
