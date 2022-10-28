import React, { useState } from "react";


export default function Modal({ movesList }) {
    let mappedMoves = movesList.map((currentMove) => {return(currentMove.move.name + ', ')} );
    const [modalState, setModalState] = useState('invisible');

    if (modalState !== 'visible') {
    return(
        <div> 
        <button className="buttonStyle" onClick={()=>{
            setModalState('visible');
        }}>Moves</button>
        </div>
    )
    } else {
    return(
    <>
        <div id="myModal" className="modal" style={{display : modalState}}>
            <div className="modal-content">
                <span className="close" onClick={()=>{ setModalState('invisible'); console.log(modalState); }}>&times;</span>
                <p> {mappedMoves} </p>
            </div>
        </div>
    </>
    )
    };
}



