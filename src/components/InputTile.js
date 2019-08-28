import React from 'react'

const InputTile = () => {
    return (
        <div>
            <input onChange={onInputChange} type="text" value={letters} />
        </div>
    )
}

export { InputTile as default }