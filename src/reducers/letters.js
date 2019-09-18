// import returnBestWords from '../logic/returnBestWords'
import PostToAPI from '../components/PostToAPI'
// import verifySevenLetters from '../logic/verifySevenLetters';

const lettersReducer = (state, action) => {
    switch (action.type) {
        case 'RETURN_BEST_WORDS':
            console.log("action.letters\t",action.letters)
            const words = PostToAPI(action.letters)
            return words
            // return f(action.letters)
            
            
            
        // case 'VERIFY_LETTERS':
        //     return verifySevenLetters(action.letters)
        default: 
            return state
    }
}

// async function f(letters) {
//     let promiseTest = new Promise((resolve,reject) => {
//         const words = PostToAPI(letters)
//         resolve(words)
//     })
//     let words = await promiseTest
//     console.log(words)
//     return words
// }



export { lettersReducer as default }