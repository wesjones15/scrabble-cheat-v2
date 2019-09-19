import React, { useReducer } from 'react'
// import InputForm from './InputFormWithAutoTab'
import InputForm from './InputForm'
// import ResultsList from './ResultsList'
import LettersContext from '../context/letters-context'
import lettersReducer from '../reducers/letters'
// import verifyLetterInput from '../logic/verifyLetterInput'
// import PostToAPI from './PostToAPI'

export const ScrabbleCheatApp = (props) => {
    const [results, dispatch] = useReducer(lettersReducer, [])
    console.log('SCRABBLECHEATAPP\t', results)
    // console.log('omfg', props);

    return (
        <LettersContext.Provider value={{ results, dispatch }}>
            <h1>Scrabble Cheat</h1>

            <InputForm
                focusIndex={props.focusIndex}
                characters={props.characters}
                onInputChange={props.onInputChange}
            />
            
        </LettersContext.Provider>
    )
}
// <ResultsList results={results} />
// ^^ this goes below InputForm in return
// Change Input Field To Seven Separate Inputs
    // Create Component For Individual Input Field

// Create Results Page Component and Result Component

// export class ParentComponentwithoutname extends React.Component {
//     // characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//     state = {
//         characters: ['','','','','','',''],
//         focusIndex: 0
//     }
//     characters_temp = ['','','','','','','']
//     onInputChange = (e, i) => {
//         console.log('e.target.value, i')
//         console.log(e.target.value, i);
//         const newVal = e.target.value;
//         this.state.characters[i] = newVal
//         const newIndex = i + 1;
//         this.setState(() => {
//             // const characters = this.characters;
//             return {
//                 characters: this.state.characters,
//                 focusIndex: newIndex
//             }
//         }) 
//         // const target_letter = e.target.value.toUpperCase()
//         // if (verifyLetterInput(target_letter)) e.target.value = target_letter
//         // else e.target.value = ""

//         // let acc = ""
//         // for (let i = 0; i < 7; i++) {
//         //     acc+=document.getElementsByTagName('input')[i].value
//         // }
//         // setLetters(e.target.value)
//     }
//     render() {
//         return (
//             <div className="parent-component-without-name">
//                 <ScrabbleCheatApp
//                     focusIndex={this.state.focusIndex}
//                     characters={this.state.characters}
//                     onInputChange={this.onInputChange}
//                 />
//             </div>
//         )
//     }
// }