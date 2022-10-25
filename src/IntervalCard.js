// import React, {useState, useEffect, useRef} from "react";
// import axios from 'axios'





// const IntervalCard = ({deckId}) => {
//     const [card,setCard] = useState('')
//     const [numCard,setNumCard] = useState(0)
//     const cardDraw = useRef()

//     async function draw(){
//         try {
//             const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//             if (res.data.remaining === 0) {
//                 setAutoDraw(false);
//                 throw new Error("no cards remaining!");
//             }
//             setCard(res.data.cards[0].image )
//             setNumCard(numCard + 1)
            
//         } catch (error) {
            
//         }

        
           
//         }


//     // useEffect(()=>{
//     //     const intId = setInterval( ()=>{    
//     //         draw();
//     //     }, 1000)
//     //     return () => clearInterval(intId)
//     // }, [])
    






 

    

 



//     return (
//         <div>
//             {numCard !== 52 && <button onClick={draw} ref={cardDraw}> Draw 1 per Second</button>}
//             {numCard === 52 && <button onClick={()=> alert("Error: no more cards")} > No More Cards!</button>}
//             <h1>Number of Cards left:{52-numCard}</h1>
//             <img  src={card} alt="card" />            
//         </div>
//     )
// }

// export default IntervalCard;