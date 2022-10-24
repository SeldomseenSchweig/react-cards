import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from "./Card";

const Deck = () => {
    // create a new deck
    const [deck, setDeck]= useState(null);
    const api = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
   

    useEffect(()=>{

        async function newDeck(){
            const res = await axios.get(api)
            console.log("Deck Id is:",res.data.deck_id)

            setDeck(res.data.deck_id) 
            
        }
        newDeck();

    }, [])
    
    



    return (

        <div>
            <h1> {deck}</h1>
            <Card deckId={deck} />
            
        </div>
    )



} 

export default Deck;