import React,{useEffect,useState} from "react";
import Cardimage from "../images/Cardimage.png";
function delay(ms)
{
    const id=setTimeout(()=>{

    },ms);
    clearTimeout(id);
}
function Card(props)
{
    const [wait,setwait]=useState(props.flip);
    useEffect(()=>{
        delay(2000)
    },[wait]);

    return(<div className="card">
       { !props.flip && !props.vanish && <div className="back">
        <img src={Cardimage}/>
        </div>}
        

        {props.flip &&<div className="front">
           <b> {props.number} </b>
        </div> }

        {props.vanish && <div className="vanished">

        </div> }
    </div>
    )
}

export default Card;