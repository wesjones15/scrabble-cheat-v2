import React from 'react'

const Result = ({word, score}) => {
    // const display = word + "\t" + score
    return (
        <div>
            <div className="row result">
                <div className="col-xs-6 result-word">
                    <h1>{word}</h1>
                </div>
                <div className="col-xs-6 result-score">
                    <h1>{score}</h1>
                </div>
            </div>
            
        </div>
    )
}

export { Result as default }