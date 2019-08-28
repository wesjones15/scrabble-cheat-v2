import returnBestWords from '../logic/returnBestWords'
// import verifySevenLetters from '../logic/verifySevenLetters';

const lettersReducer = (state, action) => {
    switch (action.type) {
        case 'RETURN_BEST_WORDS':
            return returnBestWords(action.letters)
        // case 'VERIFY_LETTERS':
        //     return verifySevenLetters(action.letters)
        default: 
            return state
    }
}

export { lettersReducer as default }