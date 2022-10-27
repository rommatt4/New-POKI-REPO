import React from "react";

export default function Card({ pokemon, loading, infoPokemon }) {
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        pokemon?.map((item) => {
          return (
            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
              <h2>{item.id}</h2>
              <img src={item.sprites.front_default} alt="h" />
              <h2>{item.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
}
