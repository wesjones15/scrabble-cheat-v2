import React, { useReducer } from 'react'
import InputForm from './InputForm'
import ResultsList from './ResultsList'
import LettersContext from '../context/letters-context'
import lettersReducer from '../reducers/letters'

const ScrabbleCheatApp = () => {
    const [results, dispatch] = useReducer(lettersReducer, [])

    return (
        <LettersContext.Provider value={{ results, dispatch }}>
            <h1>Scrabble Cheatify</h1>

            <InputForm />
            <ResultsList />
        </LettersContext.Provider>
    )
}

export { ScrabbleCheatApp as default }

// Change Input Field To Seven Separate Inputs
    // Create Component For Individual Input Field

// Create Results Page Component and Result Component