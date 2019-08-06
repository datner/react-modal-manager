import React from 'react'

const HelloModal = ({onClose}) => {
    return (
        <div>
            Hello!
            <button onClick={() => onClose()}>close</button>
        </div>
    )
}

export default HelloModal
