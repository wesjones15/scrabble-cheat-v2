// import React from 'react'
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const rp = require('request-promise')
import moment from 'moment'
// import axios from 'axios'
// const fetch = require('node-fetch')

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

// const postData = async (letters) => {
// // const postData = (letters) => {
//     const url = 'http://0.0.0.0:5000/words'
//     const data = { "letters": letters }
//     // Default options are marked with *
//     const fetchData = {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'no-cors', // no-cors, *cors, same-origin
//         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         // credentials: 'same-origin', // include, *same-origin, omit
//         headers: { 'Content-Type': 'application/json' },
//         // redirect: 'follow', // manual, *follow, error
//         // referrer: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data),
//         simple: false
//     }
//     // fetch(url, fetchData).then(response => console.log(response))
//     // const fetchResponse = await fetch(url, fetchData)
//     const fetchResponse = await rp(url, fetchData)
//     let words = await fetchResponse
//     console.log("WORDS AWAITED",words)
//     words = JSON.parse(words)
//     console.log("WORDS AWAITED",words)
//     words = words['words']
//     console.log("WORDS AWAITED",words)
//     return words
// }


// const asyncFetch = (letters) => {
//     const url = 'http://0.0.0.0:5000/words'
//     const data = { 'letters': letters }
//     const fetchData = {
//         method: 'POST', 
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//         simple: false
//     }
//     rp(url, fetchData)
//         .then(response => {
//             response = JSON.parse(response)['words']
//             console.log("FROM THEN", response)
//             return response
//         })
//         .catch(err => {
//             console.log(err)
//         })
//         // .finally(response => {
//         //     console.log("FROM FINALLY", response)
//         // })
//     // const response = await rp(url, fetchData)
//     // // console.log(response)
//     // const words = await JSON.parse(response)
//     // return words
//     // console.log("WORDS AWAITED",words)
//     // words = JSON.parse(words)
//     // console.log("WORDS AWAITED",words)
//     // words = words['words']
//     // console.log("WORDS AWAITED",words)
//     // return words
// }

// const returnWords = async (letters) => {
//     let words = await asyncFetch(letters)
//     return words
// }

const postRequest = async (letters) => {
    const url = 'http://0.0.0.0:5000/words'
    const data = { 'letters': letters }
    const fetchData = {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        simple: false
    }
    let response = await rp(url, fetchData)
    const words = await parseResponse(response)
    console.log("WORDS",words)
    return words
}

const parseResponse = (response) => {
    response = JSON.parse(response)['words']
    console.log("PARSERESPONSE:",response)
    return response
}


const start_time = moment().unix()
console.log("POSTREQUEST FUNC", postRequest(["W","E","S","L","E","Y","J"]))
const end_time = moment().unix()
const time_elapsed = end_time - start_time
console.log("[INFO] Elapsed time:", time_elapsed)

// export { postRequest as default }