import React, {useState,  useContext} from 'react'
import Todo from './Todo';
import { TodoContext } from '../context/context';

import { StyledTodo } from '../styles/sidebars';
import {db} from '../firebase.config'
import {collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import '../css/todos.css'
import Hero from './Hero';



function Todos() {
    
    const [input, setInput] = useState("")
    const {todos, activeLabel} = useContext(TodoContext)
    //console.log(activeLabel)

    //const[todos, setTodos] = useState([])
    // const todo = todos.map(todo => todo)
    // console.log(todo)
    // const todoId = todos.map(todo=>todo.id)

  

  const handleInput = (e) =>{
    setInput(e.target.value)
  }


  const addTodo = (e) =>{
    e.preventDefault()

    addDoc(collection(db, 'todos'), {
             task:input,
             completed:false,
             labelId:activeLabel,
             timestamp: serverTimestamp()
         })
    setInput("")
  }

    // const newTodo = {
    //   id:Date.now(),
    //   task:input,
    //   completed: false,
    //   labelId: activeLabel
    // }

    // setTodos(prevTodo=> [...prevTodo, newTodo])

    

  const deleteTodo = async (id) =>{
    await deleteDoc(doc(db, 'todos', id))
    
  }

  const updateTodo = (id, value) =>{
    // const newTodo = todos.filter(todo=> {
    //   if(todo.id === id){
    //     return {...todo, task:value}
    //   }
    //   return todo
    // })

    // setTodos(newTodo)


    const todoRef = doc(db, 'todos', id)

    updateDoc(todoRef, {
      task: value,
      timestamp: serverTimestamp()
    })

  }

  const toggleCheck = async (id,completed) =>{
    
    const todoRef = doc(db, 'todos', id)
    await updateDoc(todoRef, {
      completed: !completed,
      //timestamp: serverTimestamp()
    })


    // const newTodo = todos.map(todo => {
    //   if(todo.id === id){
    //      return {
    //       ...todo,
    //       completed: !todo.completed
    //     }
    //   }
    //   return todo
    // })

    // setTodos(newTodo)
  }

    return (
       
            <StyledTodo>
                <Hero />
                <div className="todos__second-wrapper">
                  <form className='todos__form' >
                      <input
                        disabled={!activeLabel}
                        className='todos__input'
                        maxLength='100'
                        value={input}
                        onChange ={handleInput}
                        type="text"
                        placeholder='Enter todo' />
                      <button
                        className='todos__btn'
                        disabled={!input}
                        onClick={addTodo}
                        type="submit"
                      >
                      </button>
                  </form>
                  <div className="todo__item-wrapper">
                    
                   {todos.map(todo =>
                      activeLabel === todo.labelId &&
                      <Todo
                          key={todo.id}
                          task={todo.task}
                          deleteTodo={deleteTodo}
                          updateTodo={updateTodo}
                          handleInput={handleInput}
                          completed={todo.completed}
                          toggleCheck={toggleCheck}
                          todos={todos}
                          input={input}
                          id={todo.id}
                          //labels={labels}
                      />
                      ) }
                  </div>
                </div>
                
            </StyledTodo>
       
    )
}

export default Todos
