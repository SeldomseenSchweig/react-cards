import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from "./Card";
import IntervalCard from "./IntervalCard";

const Deck = () => {
    // create a new deck
    const [deck, setDeck]= useState(null);
    const api = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
   

    useEffect(()=>{

        async function newDeck(){
            const res = await axios.get(api)

            setDeck(res.data.deck_id) 
            
        }
        newDeck();

    }, [])
    
    



    return (

        <div>
            <Card deckId={deck} />
            <IntervalCard deckId={deck}/>
            
        </div>
    )



} 

export default Deck;