import React from 'react'
// import LettersContext from '../context/letters-context'

const Result = ({word, score}) => {
    const display = word + "\t" + score
    // const { dispatch } = useContext(LettersContext)
    return (
        <div>
            <h3>{display}</h3>
        </div>
    )
}

export { Result as default }