import {useState, useEffect} from 'react'
import {db} from '../firebase.config'
import {collection,query, onSnapshot, orderBy } from 'firebase/firestore'

//Get data from firebase when app loads 

export function useLabels() {

    const [labels, setLabels] = useState([])
   
    useEffect(() =>{
        const labelRef = collection(db, 'labels')
        const q = query(labelRef, orderBy('timestamp', 'desc'))

        const getData = onSnapshot(q, snapshot =>{
            setLabels(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })

        return () => getData()
    },[])

    return labels
}



 //when the app loads, listen to the db and fetch new todos as they get added or removed

export function useTodos() {

    const [todos, setTodos] = useState([])

    useEffect(() =>{

        const todoRef = collection(db, 'todos')
        const q = query(todoRef, orderBy('timestamp', 'desc'))

        const getData = onSnapshot(q, snapshot =>{
            setTodos(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })

        return () => getData()

    }, [])

    return todos
}


