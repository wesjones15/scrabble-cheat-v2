import React from 'react'

export class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWords}>
                <div className="column">
                    <p>Enter up to seven letters</p>
                    <div className="form">
                        <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
                        <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
                        <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
                        <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
                        <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
                        <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
                        <input className="sevenTileStyle" onChange={this.props.onInputChange} type="text" />
                    </div>
                    <div className="form">
                        <button className="form-button">Find</button>
                    </div>
                </div>
            </form>
        )
    }
}