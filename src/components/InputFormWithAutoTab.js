import React, { useState, useContext } from 'react'
import verifyLetterInput from '../logic/verifyLetterInput'
import LettersContext from '../context/letters-context'
import { fuseWord } from '../logic/wordFunctions'

const InputForm = ({characters, focusIndex, onInputChange, ...props}) => {
    const { dispatch } = useContext(LettersContext)
    const [letters, setLetters] = useState(props.letters || "")

    console.log('props', props)

    // const onInputChange = (e, i) => {
    //     const target_letter = e.target.value.toUpperCase()
    //     if (verifyLetterInput(target_letter)) e.target.value = target_letter
    //     else e.target.value = ""

    //     // let acc = ""
    //     // for (let i = 0; i < 7; i++) {
    //     //     acc+=document.getElementsByTagName('input')[i].value
    //     // }
    //     setLetters(e.target.value)
    // }

    const onSubmit = (e) => {
        e.preventDefault()
        const letterEs = fuseWord(characters).toUpperCase()
        console.log("onSubmit", letterEs)
        dispatch({ type: "RETURN_BEST_WORDS", letterEs })
    }

    const showStuff = !!letters || letters === "";
    console.log('show stuff', showStuff, letters);
    console.log('asdf2', props)
    return (
        <div>
            {showStuff && <form onSubmit={onSubmit}>
                <h1>Enter your seven letters</h1>
                
                <input
                    className="sevenTileStyle"
                    onChange={(e) => onInputChange(e, 0)}
                    type="text"
                    value={characters[0]}
                    ref={input0 => focusIndex === 0 && input0.focus()}
                />
                <input 
                    className="sevenTileStyle"
                    onChange={(e) => onInputChange(e, 1)}
                    type="text"
                    value={characters[1]}
                    ref={input1 => focusIndex === 1 && input1.focus()}
                />
                <input
                    className="sevenTileStyle"
                    onChange={(e) => onInputChange(e, 2)}
                    type="text"
                    value={characters[2]}
                    ref={input2 => focusIndex === 2 && input2.focus()}
                />
                <input
                    className="sevenTileStyle"
                    onChange={(e) => onInputChange(e, 3)}
                    type="text"
                    value={characters[3]}
                    ref={input3 => focusIndex === 3 && input3.focus()}
                />
                <input
                    className="sevenTileStyle"
                    onChange={(e) => onInputChange(e, 4)}
                    type="text"  value={characters[4]}
                    value={characters[4]}
                    ref={input4 => focusIndex === 4 && input4.focus()}
                />
                <input
                    className="sevenTileStyle"
                    onChange={(e) => onInputChange(e, 5)}
                    type="text"
                    value={characters[5]}
                    ref={input5 => focusIndex === 5 && input5.focus()}
                />
                <input
                    className="sevenTileStyle"
                    onChange={(e) => onInputChange(e, 6)}
                    type="text"
                    value={characters[6]}
                    ref={input6 => focusIndex === 6 && input6.focus()}
                />
                <button>Find</button>
            </form>}
        </div>
    )
}

export { InputForm as default }