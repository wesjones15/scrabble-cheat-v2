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

        let letters_array = []  // save current input letters to state
        for (let i = 0; i < 7; i++) {
            const value = document.getElementsByTagName('input')[i].value.toUpperCase()
            if (value.match(/[A-Z]/)) {
                letters_array[i] = value
            }
        }
        this.setState({
            letters: letters_array
        })

        try {   // auto change focus on input
            if (document.activeElement.value.length >= 1) {
                document.activeElement.value = document.activeElement.value.toUpperCase()
                document.activeElement.nextSibling.focus().select()
            }
        } catch {
            // Do nothing
        }
    }

    getWords = async (e) => {
        e.preventDefault()
        const letters = this.state.letters || ['a']
        const query = letters.reduce((acc, letter) => acc + letter, '')
        // const url = "http://0.0.0.0:5000/words/"+query
        const url = 'https://scrabble-cheat-flask-api.herokuapp.com/words/'+query
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log("THE DATA",data)
            if (!this.state.letters) {
                data.words = [['PLEASE', 'TYPE YOUR'], ['LETTERS', 'IN THE'], ['FIELDS','ABOVE']]
            }
            this.setState({
                results: data.words
            })
            console.log(this.state)
        } catch {
            this.setState({
                results: [['THE', 'API'], ['MUST', 'BE'], ['OFF','LINE']]
            })
            console.log("scrabble-cheat-flask-api may be offline. run viewsv2.py and try again")
        }
        
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="container">
                        <div className="column container">
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
        )
    }
}



