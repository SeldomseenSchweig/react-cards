import React, {useState, useEffect, useRef} from "react";
import axios from 'axios';
import Card from "./Card";

const Deck = () => {
    const [autoDraw, setAutoDraw] = useState(false);
    const [drawn, setDrawn] = useState([]);
    const timerRef = useRef(null);
    const [deck, setDeck]= useState(null);
    const api = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
   

    useEffect(()=>{

        async function newDeck(){
            let d = await axios.get(api)

            setDeck(d.data) 
            
        }
        newDeck();

    }, [setDeck])


    useEffect(()=>{


       async function draw(){
        let { deck_id } = deck;

        try {
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
            if (res.data.remaining === 0) {
                setAutoDraw(false);
                throw new Error("no cards remaining!");
            }
            const card = res.data.cards[0]
            
            setDrawn(d => [
                ...d,
                {
                  id: card.code,
                  name: card.suit + " " + card.value,
                  image: card.image
                }
              ]);
        } catch (err) {
            alert(err)   
        }   
    }
    if (autoDraw && !timerRef.current) {
        timerRef.current = setInterval(async () => {
          await draw();
        }, 1000);
      }
      return () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
      };
    }, [autoDraw, setAutoDraw, deck]);

    const toggleAutoDraw = () => {
        setAutoDraw(auto => !auto);
      };
    
      const cards = drawn.map(c => (
        <Card key={c.id} name={c.name} image={c.image} />
      ));
    
    
      return (
        <div className="Deck">
          {deck ? (
            <button className="Deck-gimme" onClick={toggleAutoDraw}>
              {autoDraw ? "STOP" : "KEEP"} DRAWING FOR ME!
            </button>
          ) : null}
          <div className="Deck-cardarea">{cards}</div>
        </div>
      );
    }
    
    export default Deck;