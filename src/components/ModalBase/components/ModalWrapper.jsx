import React from "react";
import PropTypes from 'prop-types';

import '../ModalBase.scss';

const ModalWrapper = (props) => {
    const {onClick, children, isOpen} = props;

    const handleClickOutside = (event) => {
        if(event.target.classList.contains("modal-wrapper")){
            onClick();
        }
    }
    
    return(
        <>
            {
                isOpen && <div className="modal-wrapper" onClick={handleClickOutside}>{children}</div>
            }
        </>
        
    )
}

ModalWrapper.propsTypes = {
    onClick: PropTypes.func,
    isOpen: PropTypes.bool
}

export default ModalWrapper