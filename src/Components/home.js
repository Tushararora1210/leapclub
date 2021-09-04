import React,{useEffect,useState} from "react";
import Card from "./card";
function Home()
{

    const [clickedcard,setClickedcard]=useState([]);
    const [totalclicks,setTotalclicks]=useState(0);
    const [matched,setMatched]=useState([]);
    const [isshuffleexecuted,setIsshuffleexecuted]=useState(false);
    const [cards,setCards]=useState([]);
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
        setTimeout(()=>{
            setClickedcard([]);
        },500)
    }, [clickedcard])
   
    return(
        <div className="homepage">
            <div className="matchedcount">
                <div className="matchedcountlayout">
                <h2>Total <br/> Matched Counts</h2>
                <h2>{matched.length}</h2>
                </div>
            </div>
    <div className="home">
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
    </div>
    </div>

    )
}
export default Home;