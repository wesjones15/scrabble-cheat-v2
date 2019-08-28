import findScrabbleWordsFromLetters from './findScrabbleWordsFromLetters'
import getTopThreeBestWords from './getTopThreeBestWords'

const returnBestWords = (letters) => {
    if (letters) return getTopThreeBestWords(findScrabbleWordsFromLetters(letters.split('')))
}

export { returnBestWords as default }