import React, { useState } from 'react'
import verifySevenLetters from '../logic/verifySevenLetters'
import returnBestWords from '../logic/returnBestWords'

const ScrabbleCheatApp = (props) => {
    const [letters, setLetters] = useState(props.letters)
    const [results, setResults] = useState()

    const onInputChange = (e) => {
        const letters__toVerify = e.target.value.toUpperCase()
        if (verifySevenLetters(letters__toVerify)) {
            setLetters(letters__toVerify)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(letters)
        let resultsIn = returnBestWords(letters)
        console.log(resultsIn)
        setResults(resultsIn)
    }

    return (
        <div>
            <h1>Scrabble Cheatify</h1>

            <form onSubmit={onSubmit}>
                <h1>Enter your seven letters</h1>
                <input onChange={onInputChange} type="text" value={letters} />
                <button>Find</button>
            </form>

            <div>
                { results ? 
                    results.map(result => (
                        <div key={result[0]}>
                            <h3>{result[0]}</h3>
                            <h3>{result[1]}</h3>
                        </div>
                    )) : (<div />)
                }
            </div>
        </div>
    )
}

export { ScrabbleCheatApp as default }

// Change Input Field To Seven Separate Inputs
    // Create Component For Individual Input Field

// Create Results Page Component and Result Component