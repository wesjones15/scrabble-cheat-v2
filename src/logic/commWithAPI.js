// connects to API at views_v2.py
// views_v2
const rp = require('request-promise')
const fetch = require("node-fetch")
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const GETwords = (letters) => {
    let url = "http://0.0.0.0:5000/words/"
    const query = letters.reduce((acc, letter) => acc + letter, '')
    url += query
    let words = fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('within fetch then', data)
            return data['words']
        })

    let result = words
    console.log("WORDS:", result)
    return result
    // function reqListener() {
    //     // console.log(this.responseText)
    //     return JSON.parse(this.responseText)['words']
    // }
    // let request = new XMLHttpRequest();
    // request.addEventListener('load', reqListener)
    // request.open('GET', url, true)
    // request.send()


    // request.onload = () => {
    //     // try {
    //         response = request.responseText
    //         // console.log(response)
    //         response = JSON.parse(response)['words']
    //         console.log(response)
    //         return response
    //     // } catch {
    //     //     console.log("FUCK")
    //     // }
    // }
}


const wordResult = GETwords(["A","B","F","E","I","G","L"])
    .then(response => console.log("response",response))

// export {GETwords as default}