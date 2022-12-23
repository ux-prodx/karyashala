import React from 'react'
import ReactDOM  from 'react-dom'
import BackDrop from './BackDrop/BackDrop'
import ErrorLayer from './ErrorLayer/ErrorLayer'

const ErrorModal = ({ confirm }) => {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop confirm={confirm} />, document.getElementById("back-drop"))}
            {ReactDOM.createPortal(<ErrorLayer confirm={confirm} />, document.getElementById("error-layer"))}

        </>
    )
}

export default ErrorModal
