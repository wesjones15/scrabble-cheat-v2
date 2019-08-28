const splitWord = (word) => word.split('')

const fuseWord = (letter_list) => {
    return letter_list.reduce((acc, letter) => acc + letter, '')
}

export { splitWord, fuseWord }