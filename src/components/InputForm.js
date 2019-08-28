import React, { useState, useEffect, useContext } from 'react'
import verifySevenLetters from '../logic/verifySevenLetters'
// import returnBestWords from '../logic/returnBestWords'
import LettersContext from '../context/letters-context'

const InputForm = (props) => {
    const { dispatch } = useContext(LettersContext)
    const [letters, setLetters] = useState(props.letters)
    // const [results, setResults] = useState()

    const onInputChange = (e) => {
        
        const letters__toVerify = e.target.value.toUpperCase()
        if (verifySevenLetters(letters__toVerify)) {
            setLetters(letters__toVerify)
            // dispatch({ type: "VERIFY_LETTERS", letters__toVerify })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "RETURN_BEST_WORDS", letters })
        // console.log(letters)
        // let resultsIn = returnBestWords(letters)
        // console.log(resultsIn)
        // setResults(resultsIn)

    }

    useEffect(() => {
        dispatch({ type: "RETURN_BEST_WORDS", letters })
        // let resultsIn = returnBestWords(letters)
        // console.log(resultsIn)
        // setResults(resultsIn)
        // dispatch({ results: resultsIn })
    }, [letters])

    return (
        <form onSubmit={onSubmit}>
            <h1>Enter your seven letters</h1>
            <input onChange={onInputChange} type="text" value={letters} />
            <button>Find</button>
        </form>
    )
}

export { InputForm as default }