import React, {useState} from "react";
import axios from 'axios'


const Card = ({deck_id}) => {
    const [card,setCard] = useState('')

        async function drawCard(){
            
         
                const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
                setCard(res.data.cards[1].value )

    }
    return (
        <div>
            <button onClick={drawCard}> Draw</button>

            <p>{card}</p>
        </div>
    )
}




export default Card;