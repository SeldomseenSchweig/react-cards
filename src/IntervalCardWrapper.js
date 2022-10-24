import React, {useState} from 'react';
import IntervalCard from './IntervalCard';

const IntervalCardWrapper = () =>{

    const [timerVisible, setTimerVisible] = useState(true)
    const toggleTimer = () =>{

        setTimerVisible(!timerVisible)
    }


        return ( 
        <div >

            <button onClick={toggleTimer}> Toggle Draw</button>
            {timerVisible && <IntervalCard />}
        
        </div>)
    }
    export default IntervalCardWrapper;