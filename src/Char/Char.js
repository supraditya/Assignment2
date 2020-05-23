import React from 'react';
import './Char.css';
const Char=(props)=>{
    return(
        <div className="Char" onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    )
}
export default Char;