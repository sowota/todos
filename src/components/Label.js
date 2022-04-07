import React from 'react'
import { FaEdit, FaTag } from 'react-icons/fa'
import { themeContext } from '../context/themeContext'
import '../css/label.css'
import ModalFunc from './Modal'


const Label = ({name, id, updateLabel, setActiveLabel, deleteLabel,activeLabel}) =>{

    const inputRef = React.useRef(true)
    const {theme} = React.useContext(themeContext)

   
    const changeFocus = () =>{
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    const update =(e, id, value)=>{
        if(e.which === 13){
            updateLabel(id, value)
            inputRef.current.disabled = true
        }
    }

   
    return (
        
            <div 
                className={`label__item ${id === activeLabel? 'active': ''}`}
                onClick={()=>setActiveLabel(id)}
            >
                <div className={`label__tag ${theme === 'dark'? 'dark7': '' }`}>
                    <FaTag  />
                </div>
                <input
                    className={`label__output ${theme === 'dark'? 'dark7' : ''}`}
                    maxLength="55"
                    defaultValue={name}
                    ref={inputRef}
                    disabled={inputRef}
                    autoFocus={true}
                    onKeyPress={e=>update(e, id, inputRef.current.value)}
                />
                <div className='label__btns'>
                    <div>
                        <button
                            className={`label__btn ${theme === 'dark'? 'dark7': '' }`}
                            onClick={() => changeFocus()}>
                            <FaEdit />
                        </button>
                    </div>
                    <ModalFunc 
                        deleteLabel={deleteLabel}
                        id={id}
                    />
                </div>
            
            </div>
     
    )
}

export default Label
