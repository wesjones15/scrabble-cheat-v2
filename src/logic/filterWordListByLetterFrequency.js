import { fuseWord } from './wordFunctions'
import getFrequencyOfLetterInWord from './getFrequencyOfLetterInWord'

const filterWordListByLetterFrequency = (user_letters, word_list) => {
    user_letters.forEach(letter => {
        const userLetterFrequency = getFrequencyOfLetterInWord(letter, fuseWord(user_letters))
        word_list = word_list.filter(word => !(getFrequencyOfLetterInWord(letter, word) > userLetterFrequency))
    })
    return word_list
}

export { filterWordListByLetterFrequency as default }