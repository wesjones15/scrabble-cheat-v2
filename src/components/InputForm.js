import React from 'react'

export class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWords}>
                <div className="container">
                    <div className="row">
                        <div className="col form">
                            <p>Enter up to seven letters</p>
                        </div>
                    </div>
                    <div className="row form">
                            <input className="tileStyle" onChange={this.props.onInputChange} type="text" />
                            <input className="tileStyle" onChange={this.props.onInputChange} type="text" />
                            <input className="tileStyle" onChange={this.props.onInputChange} type="text" />
                            <input className="tileStyle" onChange={this.props.onInputChange} type="text" />
                            <input className="tileStyle" onChange={this.props.onInputChange} type="text" />
                            <input className="tileStyle" onChange={this.props.onInputChange} type="text" />
                            <input className="tileStyle" onChange={this.props.onInputChange} type="text" />
                    </div>
                    <div className="row form form-button">
                        <button className="form-button__display">Find</button>
                    </div>
                </div>
            </form>
        )
    }
}