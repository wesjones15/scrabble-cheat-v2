import React from 'react'

const Result = ({word, score}) => {
    const display = word + "\t" + score
    return (
        <div>
            <h3>{display}</h3>
        </div>
    )
}

export { Result as default }