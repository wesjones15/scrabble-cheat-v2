import filterOutUnusedLetters from './filterOutUnusedLetters'
import filterWordListByLetterFrequency from './filterWordListByLetterFrequency'

const findScrabbleWordsFromLetters = (letters) => {
    return filterWordListByLetterFrequency(letters, filterOutUnusedLetters(letters));
}

export { findScrabbleWordsFromLetters as default }