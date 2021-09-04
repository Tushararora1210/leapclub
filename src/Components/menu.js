import React from "react";
import {useHistory} from "react-router-dom";
function Menu()
{
    const history=useHistory();
return <div className="menupage">
    <h1>Memory Game Developed By Tushar Arora</h1>
<button className="showmenu" onClick={()=>{
history.push('/game');
}}>
<h2>Play Game</h2>
</button>
</div>
}
export default Menu;