import React from "react";

export default function Card({ pokemon, loading, infoPokemon }) {
  return (
    <>
      {loading ? (
        <h2><img src="https://64.media.tumblr.com/0018b4de0800b3e822bc5a7895ccfc62/tumblr_nbp3g3IwBz1sq0qq9o1_400.gif" alt="Loading..." width="500" height="600"/>
        </h2>
        
      ) : (
        pokemon.map((item) => {
          return (
            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
              <h2>{item.id}</h2>
              <img src={`https://play.pokemonshowdown.com/sprites/ani/${item.name}.gif`} alt="h" /><br/>
              <h2>{item.name[0].toUpperCase().concat(item.name.substring(1))}</h2>
            </div>
          );
        })
      )}
    </>
  );
}
