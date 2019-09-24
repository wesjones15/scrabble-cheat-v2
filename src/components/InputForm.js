import React, { useState, useContext } from 'react'
// import verifySevenLetters from '../logic/verifySevenLetters'
// import { fuseWord } from '../logic/wordFunctions'
// import returnBestWords from '../logic/returnBestWords'
import LettersContext from '../context/letters-context'
import GETwords from '../logic/commWithAPI'

// import PostToAPI from './PostToAPI'

const InputForm = (props) => {
    const { dispatch } = useContext(LettersContext)
    const [letters, setLetters] = useState(props.letters)
    const [results, setResults] = useState(props.results)

    const onInputChange = (e) => {
        
        // const letters__toVerify = e.target.value.toUpperCase()
        // if (verifySevenLetters(letters__toVerify)) {
        //     setLetters(letters__toVerify)
        //     // dispatch({ type: "VERIFY_LETTERS", letters__toVerify })
        // }

        let letters_array = []

        for (let i = 0; i < 7; i++) {
            // letters_array.push(document.getElementsByTagName('input')[i].value)
            letters_array[i] = document.getElementsByTagName('input')[i].value
        }
        console.log(letters_array)
        setLetters(letters_array)
        // setLetters(fuseWord(letters_array))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // dispatch({ type: "RETURN_BEST_WORDS", letters })
        // console.log("WITHIN ONSUBMIT",letters)
        dispatch({ type: "RETURN_BEST_WORDS", letters })

        // let url = "http://0.0.0.0:5000/words/"
        // const query = letters.reduce((acc, letter) => acc + letter, '')
        // url += query
        // let words = await fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('within fetch then', data)
        //         setResults(data['words'])
        //     })


        // const theAnswer = await GETwords(letters)
        //     .then(response => console.log("ONSUBMIT", response))
        // await setResults(PostToAPI(letters))
        // console.log(results)

        // console.log(letters)
        // let resultsIn = returnBestWords(letters)
        // console.log(resultsIn)
        // setResults(resultsIn)

    }

    // useEffect(() => dispatch({ type: "RETURN_BEST_WORDS", letters }), [letters])

    // let lettersArr = ['A','B','C','D','E','F','G']

    // <input onChange={onInputChange} type="text" value={letters} />
    return (
        <form onSubmit={onSubmit}>
            <h1>Enter your seven letters</h1>
            
            <input className="sevenTileStyle" onChange={onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={onInputChange} type="text" />
            <button>Find</button>
            <h4>{results}</h4>
        </form>
    )
}

export { InputForm as default }