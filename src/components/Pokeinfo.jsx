import React from 'react'

const Pokeinfo = ({ data }) => {
    console.log("data",data)
  return (
    <>
    {
    (!data) ? " " : (
        <>
        <div className="pokeinfo" key={data.id}>
         <h1>{data.name}</h1>
        <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
            <div className="abilities">
                <div className="group">
                    <h2>blaze</h2>
                </div>
                <div className="group">
                    <h2>ember</h2>
                </div>
            </div>
            <div className="base-stat">
                <h3>hp</h3>
                <h3>attack</h3>
                <h3>defense</h3>
                <h3>special abil</h3>
                <h3>speed</h3>
            </div>
            </div>
            </>
    )
    
    }
       </>
    
  )
}


export default Pokeinfo