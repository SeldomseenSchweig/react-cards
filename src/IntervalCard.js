import React, {useState, useEffect} from "react";
import axios from 'axios'





const IntervalCard = ({deckId}) => {
    const [card,setCard] = useState('')
    const [numCard,setNumCard] = useState(0)
    async function  draw(){
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        setCard(res.data.cards[0].image )
        setNumCard(numCard + 1)


    }



    function intervalDraw(){

       
            
                setInterval( ()=>{
                    draw()
                }, 1000)


            }

    

 



    return (
        <div>
            {numCard !== 52 && <button onClick={intervalDraw}> Draw 1 per Second</button>}
            {numCard === 52 && <button onClick={()=> alert("Error: no more cards")} > No More Cards!</button>}
            <h1>Number of Cards left:{52-numCard}</h1>
            <img  src={card} alt="card" />
            
        </div>
    )
}

export default IntervalCard;