import React,{useEffect,useState} from "react";
import Cardimage from "../images/Cardimage.png";

function Card(props)
{
    const [wait,setwait]=useState(props.flip);
    
    return(<div className="card">
       { !props.flip && !props.vanish && <div className="back">
        <img src={Cardimage}/>
        </div>}
        
        {props.flip &&
        <div className="front">
           <b> {props.number} </b>
        </div> }
        

        {props.vanish && <div className="vanished">

        </div> }
    </div>
    )
}

export default Card;