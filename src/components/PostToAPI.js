// import React from 'react'
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const PostToAPI = (letters) => {
    let request = new XMLHttpRequest();
    const url = 'http://0.0.0.0:5000/words'
    const data = { 'letters': letters }

    console.log(" INPUT:\t", data)

    request.open('POST', url, true)
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    request.setRequestHeader('Access-Control-Allow-Origin', '*')

    request.send(JSON.stringify(data))
    request.onloadend = () => {
        const words = JSON.parse(request.responseText)['words']
        console.log("OUTPUT:\t", words)
        return words
    }
    

    // return new Promise((resolve, reject) => {
    //     request.open('POST', url, true)
    //     request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    //     request.setRequestHeader('Access-Control-Allow-Origin', '*')

    //     request.send(JSON.stringify(data))
    //     request.onloadend = () => {
    //         const words = JSON.parse(request.responseText)['words']
    //         console.log("OUTPUT:\t", words)
    //         resolve(words)
    //     }
    // }).then((words) => { return words })
}
// PostToAPI(['W','E','S','T','E','R','N'])

// async function f(letters) {
//     let promiseTest = new Promise((resolve,reject) => {
//         const words = PostToAPI(letters)
//         resolve(words)
//     })
//     let words = await promiseTest
//     console.log(words)
//     return words
// }
export { PostToAPI as default }