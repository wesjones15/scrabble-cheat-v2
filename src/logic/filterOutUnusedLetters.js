// const path = require('path')
// import scrabbleWordList from path.resolve(__dirname, 'text/scrabble_word_list.txt')
// process.env.PUBLIC_URL + 'text/scrabble_word_list.txt'

import scrabble_word_list from './text/scrabble_word_list'

const filterOutUnusedLetters = (letters) => {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // console.log(scrabble_word_list)
    const scrabble_dictionary = scrabble_word_list.split('\n').filter(word => word.length <= 7)
    
    // console.log("scrabble_dictionary", scrabble_dictionary)

    let inversedLetters = alphabet.filter(char => !(letters.includes(char)))
    let filteredList = scrabble_dictionary.filter(word => word.length <= letters.length)
    inversedLetters.forEach(letter => {
        filteredList = filteredList.filter(word => !(word.includes(letter)))
    })
    return filteredList    
}

export { filterOutUnusedLetters as default }