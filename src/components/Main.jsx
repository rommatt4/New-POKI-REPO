import React, { useState, useEffect } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from 'axios'

const Main = ()=> {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState()

    const pokeFun=async()=>{
        console.log("pokeFun")
        setLoading(true)
        const resp = await axios.get(url);
        console.log("resp",resp)
        setNextUrl(resp.data.next)
        setPrevUrl(resp.data.previous)
        getPokemon(resp.data.results)
        setLoading(false)
    }
    const getPokemon=async(resp)=>{
        console.log("getPokemon")
        resp.map(async(item) => {
            const result=await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a,b) => a.id>b.id?1: -1)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
        
    },[url])

  return (
    <>
    <div className='container'>
        <div className='left-content'>
        <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)}/>
        <div className="btn-group">
            <button>Previous</button>
            <button>Next</button>
        </div>
        </div>
        
        <div className='right-content'>
            <Pokeinfo data={pokeDex}/>
        </div>
    </div>
    </>
  )
}

export default Main;