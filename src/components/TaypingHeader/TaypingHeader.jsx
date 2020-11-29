import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from './TaypingHeader.module.css';
import useTypewriter from "react-typewriter-hook";



const headerOptins = [
    "מספר המתים",
    "מספר הנדבקים",
    "מספר המבריאים",
    "מספר החולים",
    "מספר החולים קריטי",
  ];
let index = 0;
  

const TaypingHeader = () => {
   
    
  const [titleName, setTitleName] = useState("מספר המתים");
    const intervalRef = useRef({});
    const name = useTypewriter(titleName);
    
    
    
    
    useEffect(
      () => {
        intervalRef.current = setInterval(() => {
          // index = index + 1 > 2 ? 0 : ++index + 1;
          index = index > 2 ? 0 : ++index;
          setTitleName(headerOptins[index]);
        }, 5000);
        return function clear() {
          clearInterval(intervalRef.current);
        };
      },
      [titleName]
    );


    return (
      <div>
        <p><span>עדכון</span> {name} </p>
      </div>
    );
}


export default TaypingHeader