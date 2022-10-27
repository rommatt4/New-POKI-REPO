import React, { useState, useEffect } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from 'axios'

export default function Main() {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`)
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const pokeFun= async () => {
        setLoading(true)
        const resp = await axios.get(url);
        setNextUrl(resp.data.next)
        setPrevUrl(resp.data.previous)
        getPokemon(resp.data.results)
        setLoading(false)
    }
    const getPokemon=async(resp)=>{
        resp.map(async(item) => {
            const result=await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
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
        <Card pokemon={pokeData} loading={loading}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <div className="btn-group">
            <button>Previous</button>
            <button>Next</button>
        </div>
        </div>
        
        <div className='right-content'>
            <Pokeinfo/>
        </div>
    </div>
    </>
  )
}
