import React from 'react'
import { Form } from './InputForm'
import ResultsList from './ResultsList'

export class ScrabbleCheatApp extends React.Component {
    state = {
        letters: undefined,
        results: undefined
    }

    onInputChange = (e) => {
        e.preventDefault()
        let letters_array = []

        for (let i = 0; i < 7; i++) {
            letters_array[i] = document.getElementsByTagName('input')[i].value.toUpperCase()
        }
        this.setState({
            letters: letters_array
        })
        console.log(this.state)
    }

    getWords = async (e) => {
        e.preventDefault()
        const letters = this.state.letters
        const query = letters.reduce((acc, letter) => acc + letter, '')
        const url = "http://0.0.0.0:5000/words/"+query
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                results: data.words
            })
            console.log(this.state)
        } catch {
            console.log("scrabble-cheat-flask-api may be offline. run viewsv2.py and try again")
        }
        
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="column">
                                <div className="title-container">
                                    <h1>Scrabble Cheat</h1>
                                </div>
                                <div className="form-container">
                                    <Form 
                                        getWords={this.getWords} 
                                        onInputChange={this.onInputChange} 
                                    />
                                    <ResultsList 
                                        results={this.state.results} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



