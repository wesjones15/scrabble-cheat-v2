import React, { useState, useContext } from 'react'
import verifyLetterInput from '../logic/verifyLetterInput'
import LettersContext from '../context/letters-context'

const InputForm = (props) => {
    const { dispatch } = useContext(LettersContext)
    const [letters, setLetters] = useState(props.letters)

    const onInputChange = (e) => {
        const target_letter = e.target.value.toUpperCase()
        if (verifyLetterInput(target_letter)) e.target.value = target_letter
        else e.target.value = ""

        let acc = ""
        for (let i = 0; i < 7; i++) {
            acc+=document.getElementsByTagName('input')[i].value
        }
        setLetters(acc)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch({ type: "RETURN_BEST_WORDS", letters })
    }

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
        </form>
    )
}

export { InputForm as default }