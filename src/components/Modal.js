import React from 'react'
import Modal from '@material-ui/core/Modal';
import {FaTrashAlt } from 'react-icons/fa'
import '../css/modal.css'
import { themeContext } from '../context/themeContext'

export default function ModalFunc({deleteLabel, id}) {

    const [open, setOpen] = React.useState(false);
    const {theme} = React.useContext(themeContext)

    
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
            <div className="modal">
                <button
                    onClick={handleOpen}
                    className={`label__btn ${theme === 'dark'? 'dark': '' }`}
                >
                
                    <FaTrashAlt />
                </button>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <div className='modal__window'>
                        <div className={`modal__content ${theme === 'dark' ? "dark10": ""}`}>
                            <h2 className='modal__title'>Delete label?</h2>
                            <p className='modal__body'>Any todos in the label will be deleted. This cannot be undone. </p>
                            <hr></hr>
                            <div className="modal__btn">
                                <button
                                    className='modal__cancel'
                                    onClick={handleClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className='modal__delete'
                                    onClick={()=>deleteLabel(id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal >
            </div>
        
    )
}

