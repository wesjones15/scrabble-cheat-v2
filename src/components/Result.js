import React from 'react'

const Result = ({word, score}) => {
    // const display = word + "\t" + score
    return (
        <div className="container">
            <div className="row result">
                <div className="col col-xs-6 word-container">
                    <h1>{word}</h1>
                </div>
                <div className="col col-xs-6 score-container">
                    <h1>{score}</h1>
                </div>
            </div>
        </div>
    )
}

export { Result as default }