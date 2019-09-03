import React, { useContext } from 'react'
import Result from './Result'
import LettersContext from '../context/letters-context'

const ResultsList = () => {
    const { results } = useContext(LettersContext)
    return (
        <div>
            { results ? results.map(result => (
                <Result 
                    key={result[0]}
                    word={result[0]}
                    score={result[1]}
                />
            )) : (<div />) }
        </div>
    )
}

export { ResultsList as default }