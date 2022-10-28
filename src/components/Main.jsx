import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { allPokemonContext } from "../App.js";
import getPokeJSON from "../getPokeJSON.js";


const Main = () => {
  const [searchInput, setSearchInput] = useState('');
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
  );
  const [nextUrl, setNextUrl] = useState();
  const [nextPokeDex, setNextPokeDex] = useState(); // load next poke deck
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [filteredData, setFilteredResults] = useState([]);
  const { setAllPokemon } = React.useContext(allPokemonContext);
  let allData;
  console.log('getPokeJSON call', await getPokeJSON());

  
  const pokeFun = async () => {
    setLoading(true);
   const resp = await axios.get(url);
    // useEffect(() => {
    //                     fetch(url)
    //                     .then(res => res.json())
    //                     .then(data => getPokemon(data.results))
    //                    }, url)
                       
   console.log("resp", resp);
   setNextUrl(resp.data.next);
   setPrevUrl(resp.data.previous);
    getPokemon(resp.data.results);

    setLoading(false);
  };
  const getPokemon =  (resp) => {
    console.log("get pokemon call: ", resp);
    const allPokemon = [];
    resp.map((item) => {
      // const result = await axios.get(item.url);
        fetch(item.url)
        .then((res) => res.json())
        .then(data => {
            allPokemon.push(data)
            setPokeData((state) => {
                state = [...state, data ];
                state.sort((a, b) => (a.id > b.id ? 1 : -1));
                return state;
            })
            })
        // const pokeJSON = result.json();
        // allPokemon.push(pokeJSON);
    //   setPokeData((state) => {
    //     state = [...state, ];
    //     state.sort((a, b) => (a.id > b.id ? 1 : -1));
    //     return state;
    //   });
   
    });
    console.log('All pokemon call', allPokemon);
    // setAllPokemon(allPokemon);
    // console.log('Stringify call', JSON.stringify(Promise.all(allPokemon)));
    //console.log('value call', value);
  };
  
  const searchItems = (searchValue, allData) =>{
    setSearchInput(searchValue)
        if (searchInput !== '') {
            console.log('Search method call', allData);
            const filteredData = allData.types.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(allData)
        }
    }
    

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
    <input icon = 'search'
        placeholder ="Search"
        onChange={(e)=> searchItems(e.target.value, allData)}/>
      <div className="right-content">
        <Pokeinfo data={pokeDex} />
      </div>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />
          <div className="btn-group">
          <button onClick={()=>{
                setPokeData([])
                setUrl("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
            }}>1st Page</button>
           {prevUrl && <button onClick={()=>{
                setPokeData([])
                setUrl(prevUrl)
            }}>Previous</button>}
           {nextUrl && <button onClick={()=>
            {
                setPokeData([])
                setUrl(nextUrl)}}>Next</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
