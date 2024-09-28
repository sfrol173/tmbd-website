import React from "react";
import Close from '../icons/close.svg?react';

const ModalClose = ({onClick}) => {
    return (
        <button onClick={onClick} className='modal-close'>
            <Close/>
            </button>
    )
}

export default ModalClose