import { splitWord } from './wordFunctions'
import convertLetterToPointValue from './convertLetterToPointValue'

const getPointValueOfWord = (word) => {
    const letters = splitWord(word);
    let score = 0;
    letters.forEach(letter => score+=convertLetterToPointValue(letter));
    return score;
}

export { getPointValueOfWord as default }