// import React from 'react'
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const rp = require('request-promise')
// function PostToAPI(letters) {
//     let request = new XMLHttpRequest();
//     const url = 'http://0.0.0.0:5000/words'
//     const data = { 'letters': letters }

//     // console.log(" INPUT:\t", data)

//     request.open('POST', url, true)
//     request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
//     request.setRequestHeader('Access-Control-Allow-Origin', '*')
//     request.send(JSON.stringify(data))
    
//     request.onloadend = async function() {
//     // request.onloadend = () => {
//         let response
//         try {
//             response = await request.responseText

//         } catch {
//             request.status
        
//         } finally {
//             const words = JSON.parse(response)['words']
//             return words
//         }        
//         console.log(words)
//     }
//     return [['FRIZED', 19], ['FRIZES', 18], ['FRIZE', 17]]
// }

const postData = async (letters) => {
    const url = 'http://0.0.0.0:5000/words'
    const data = { 'letters': letters }
    // Default options are marked with *
    const fetchData = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: { 'Content-Type': 'application/json' },
        // redirect: 'follow', // manual, *follow, error
        // referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
    let fetchResponse = await rp(url, fetchData)
    const words = await JSON.parse(fetchResponse)['words']
    console.log("WORDS AWAITED",words)
    return words
    // fetchResponse.then(response => response.json()).then(data => console.warn(data))
    // .then(response => console.log('Success:', JSON.stringify(response)))
    // .catch(error => console.error('Error:', error));
}



// postData(["W","E","S","L","E","Y","J"])

export { postData as default }