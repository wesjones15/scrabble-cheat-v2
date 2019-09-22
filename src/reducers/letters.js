// import returnBestWords from '../logic/returnBestWords'
// import PostToAPI from '../components/PostToAPI'
// import verifySevenLetters from '../logic/verifySevenLetters';
import GETwords from '../logic/commWithAPI'

const lettersReducer = async (state, action) => {
    switch (action.type) {
        case 'RETURN_BEST_WORDS':
                // let url = "http://0.0.0.0:5000/words/"
                // const query = action.letters.reduce((acc, letter) => acc + letter, '')
                // url += query
                // let words = await fetch(url)
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log('within fetch then', data)
                //         return data['words']
                //     })



            console.log("action.letters\t",action.letters)
            const words = await GETwords(action.letters)
                .then(response => {
                    console.log("in reducer",response)
                })
            return words
            
            
            
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