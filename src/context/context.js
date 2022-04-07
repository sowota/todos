import React, {createContext, useState} from 'react'

import { useTodos, useLabels } from '../hooks/hook'

export const TodoContext = createContext()

export function ContextProvider({children}) {

    const todos = useTodos()
    
    const labels = useLabels(todos)

    const[activeLabel, setActiveLabel] = useState("")

    
    const [isShow, setIsShow] = React.useState(false)
    

    const toggleMenu = () =>{
        setIsShow(prevState => !prevState)
    }

   

    return (
        <TodoContext.Provider value={
            {
                activeLabel, 
                setActiveLabel, 
                todos: todos, 
                labels: labels,
                isShow,
                toggleMenu
                
            }
            }>
            {children}
        </TodoContext.Provider>
    )
}


