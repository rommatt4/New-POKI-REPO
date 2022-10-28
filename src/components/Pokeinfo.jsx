import React from 'react';
import Modal from "./Modal";

const Pokeinfo = ({ data }) => {
    console.log("data",data);
    
  return (
    <>
    {
    (!data) ? " " : (
        <>
        <div className="pokeinfo" key={data.id}>
         <h2>{data.name[0].toUpperCase().concat(data.name.substring(1))}</h2>
         <h3 className="attributes"> Height: {Math.floor(data.height* 0.32808)} ft</h3>
         <h3 className="attributes"> Weight: {data.weight} lbs</h3>
        <img src= {`https://play.pokemonshowdown.com/sprites/ani/${data.name}.gif`} alt="" />
            <div className="types"> Type:
                <div className="group">
                    <h2>{(data.types[0] === undefined) ? "no types" : data.types[0].type.name}</h2>
                </div>
                {(data.types[1] === undefined) ? "" : <div className="group"> <h2> {data.types[1].type.name} </h2> </div>}
            </div>
            <div className="abilities"> Abilities:
                <div className="group">
                    <h2>{(data.abilities[0] === undefined) ? "no abilities" : data.abilities[0].ability.name}</h2>
                </div>
                {(data.abilities[1] === undefined) ? "" : <div className="group"> <h2> {data.abilities[1].ability.name} </h2> </div>}
            </div>
            <div className="base-stat">
                <h3>{data.stats[0].base_stat} HP</h3>
                <h3>{data.stats[1].base_stat} Attack</h3>
                <h3>{data.stats[2].base_stat} Defense</h3>
                <h3>{data.stats[3].base_stat} Special Attack</h3>
                <h3>{data.stats[4].base_stat} Special Defense</h3>
                <h3>{data.stats[5].base_stat} Speed</h3>
            </div>
            <Modal movesList={data.moves} />
        </div>
        </>
    )
    
    }
       </>
    
  )
}


export default Pokeinfo