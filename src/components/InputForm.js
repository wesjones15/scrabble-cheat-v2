import React from 'react'

export class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWords}>
            <h1>Enter up to seven letters</h1>
            <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
            <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
            <button>Find</button>
        </form>
        )
    }
}