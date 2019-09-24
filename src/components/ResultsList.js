import React from 'react'
import Result from './Result'

export class ResultsList extends React.Component {
    render() {
        return (
            <div>
                { this.props.results ? this.props.results.map(result => (
                    <Result 
                        key={result[0]}
                        word={result[0]}
                        score={result[1]}
                    />
                )) : (<div />) }
            </div>
        )
    }
}

export { ResultsList as default }