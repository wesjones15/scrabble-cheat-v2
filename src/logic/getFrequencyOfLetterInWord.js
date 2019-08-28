import { splitWord } from './wordFunctions'

const getFrequencyOfLetterInWord = (letter, word) => {
    let wordArray = splitWord(word)
    let frequency = 0
    wordArray.forEach(char => {
        if (char === letter) {
            frequency++
        }
    })
    return frequency
}

export { getFrequencyOfLetterInWord as default }