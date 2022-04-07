import '../css/todo.css'
import React, {useRef} from 'react'
import { FaEdit, FaTrashAlt, FaRegCircle, FaRegCheckCircle} from 'react-icons/fa'
import {themeContext} from '../context/themeContext'



function Todo({task, deleteTodo, id, updateTodo, completed, toggleCheck,  }) {
   
    const inputRef = useRef(true)
    const {theme} = React.useContext(themeContext)
    
    
    const changeFocus = () =>{
        inputRef.current.disabled = false
        inputRef.current.focus()
      }

    const update = (id, value, e) => {
    if (e.which === 13) {
        //here 13 is key code for enter key
        updateTodo(id, value);
        inputRef.current.disabled = true;
    }
    };

    const changeCheck = () =>{  
        toggleCheck(id, completed)
    }


    return (
        <div className='todo'>  
            <div className="todo__task"
                    
            >
                <div className="todo__toggle"
                    onClick={changeCheck}
                >
                    {
                        completed?
                        <FaRegCheckCircle color='#00A82D' fontSize='1.188rem'/>
                        :
                        <FaRegCircle color='#aeb6b8' fontSize='1.188rem'/>
                    }
                </div>

                

                <input
                    htmlFor="check"
                    className={`todo__input ${theme === 'dark'? 'dark' : ''}`}
                    defaultValue={task}
                    maxLength='80'
                    //onChange ={handleInput}
                    ref={inputRef}
                    disabled={inputRef}
                    onKeyPress={(e) => update(id, inputRef.current.value, e)}
                    style={{textDecoration: completed ? 'line-through' : '', textDecorationColor: completed ? '#00A82D': '', textDecorationThickness: completed ? '3px' : '',}}
                />
            </div>
            <div className='todo__btns'>
                <button className={`${theme === 'dark'? 'dark': ''}`}
                onClick={() => deleteTodo(id)}
                ><FaTrashAlt fontSize='1.188rem' /></button>
                <button 
                    onClick={() => changeFocus()}
                    className={`${theme === 'dark'? 'dark': ''}`}
                >
                        <FaEdit fontSize='1.188rem'/>
                </button>
            </div>
        </div>
    )
}

export default Todo
