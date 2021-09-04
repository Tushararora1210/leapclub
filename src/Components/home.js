import React,{useEffect,useState} from "react";
import {useHistory} from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Card from "./card";
function Home()
{
    const history=useHistory();
    const [clickedcard,setClickedcard]=useState([]);
    const [totalclicks,setTotalclicks]=useState(0);
    const [matched,setMatched]=useState([]);
    const [isshuffleexecuted,setIsshuffleexecuted]=useState(false);
    const [cards,setCards]=useState([]);
    const [gamecompleted,setGamecompleted]=useState(false);
    console.log("Clicked card is",clickedcard)
    console.log("Matchedcards are",matched)
     function shuffle(array)
    {
        var n=array.length;
        for(var i=0;i<n;i++)
        {
            var idx=Math.floor((Math.random()*(n-1-i))+i);
            [array[i],array[idx]]=[array[idx],array[i]];
        }
    }
    var alphabets=[{id:1,value:'A'},
    {id:2,value:'B'},{id:3,value:'C'},{id:4,value:'D'},
    {id:5,value:'E'},{id:6,value:'F'},{id:7,value:'G'},{id:8,value:'H'}];
    var cardalphabets=[...alphabets,...alphabets];
    
    if(!isshuffleexecuted)
    {
        shuffle(cardalphabets);
        setCards(cardalphabets);
        setIsshuffleexecuted(true);
    }

    useEffect(() => {
        if(clickedcard.length<2)
            return;
        const firstmatchcard=cards[clickedcard[0]];
        const secondmatchcard=cards[clickedcard[1]];
        console.log("First matchcard id is",firstmatchcard)
        console.log("Second matchcard id is",secondmatchcard)
        if(firstmatchcard.id===secondmatchcard.id)
        {
            setMatched([...matched,firstmatchcard.id]);
        }
        console.log(matched.length);
        if(matched.length===7)
        {
            setGamecompleted(true);
            console.log(gamecompleted);
        }
        setTimeout(()=>{
            setClickedcard([]);
        },600)
        
    }, [clickedcard])
   
    return(
        <div className="homepage">

            <div className="matchedcount">
                <div className="matchedcountlayout">
                <h2>Total <br/> Matched Counts</h2>
                <h2>{matched.length}</h2>
                </div>
                <button className="menuiconlayout" onClick={
                    ()=>{
                        history.push('/');
                    }
                }>
                    <h2>Menu</h2>
                </button>
            </div>
    <div className="home">
    
    <Modal 
        open={gamecompleted}
        disableEnforceFocus
        style={{
          position: 'absolute',
          backgroundColor: "red",
          color:"wheat",
          boxShadow: '2px solid black',
          borderRadius:"50%",
          height:"25vh",
          width:"60vw",
          margin: 'auto'
        }}
      >
          <div >

        <h2 className="completedtext" style={{marginTop:"8vh",fontStyle:"italic"}}>Congrats,you completed the Game in {totalclicks} clicks</h2>
        <button className="restarticonlayout" style={{position:"relative",left:"25vw"}} onClick={
        ()=>{
            window.location.reload();
        }
    }>
               <h2>Restart</h2>     
    </button>
        </div>
      </Modal>
        {cards.map((val,index)=>
            {
                let isFlipped=false;
                let isVanished=false;
                if(clickedcard.includes(index))
                {
                    isFlipped=true;
                }
                if(matched.includes(cards[index].id))
                {
                    isVanished=true;
                }
                
            return(<div className={isFlipped?"flip":""} onClick={()=>{
                if(!isVanished && !isFlipped && clickedcard.length<2)
                {
                    setClickedcard([...clickedcard,index])
                    setTotalclicks(totalclicks+1);
                }

            }}>

                {<Card number={val.value} flip={isFlipped} vanish={isVanished} key={index}  />}
                 </div>)   
            }
        )
        }
       
    
    </div>
    <div className="clickedcount"> 
    <div className="clickedcountlayout">
    <h2>Total <br/> Clicked Counts</h2>
    <h2>{totalclicks}</h2>
    </div>
    <button className="restarticonlayout" onClick={
        ()=>{
            window.location.reload();
        }
    }>
               <h2>Restart</h2>     
    </button>
    </div>
    </div>

    )
}
export default Home;