import React from 'react'
import Main from './components/Main'
import './components/style.css'

export const allPokemonContext = React.createContext({data: [], setAllPokemon: () => {}})

export default function App() {
  return (
    <>
    <allPokemonContext.Provider value={[]}>
    <Main />
    </allPokemonContext.Provider>
    
    </>
  )
}
