import React from 'react'
import { FaPlus, FaTags } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";
import Label from './Label';
import { TodoContext } from '../context/context';
import ToggleSwitch from './ToggleSwitch';
import { StyledSidebar } from '../styles/sidebars';
import { themeContext } from '../context/themeContext'
import {db} from '../firebase.config'
import {collection, getDocs,getDoc, addDoc, query, deleteDoc, doc, updateDoc, serverTimestamp, where } from 'firebase/firestore'
import '../css/sidebar.css'


function Sidebar() {

    
    const[input, setInput]= React.useState("")

    // const [labels, setLabels] = React.useState([])

    // const[activeLabel, setActiveLabel] = React.useState('')

    const{labels,setActiveLabel, activeLabel, isShow} = React.useContext(TodoContext)
    

    const {theme} = React.useContext(themeContext)

    //console.log(activeLabel)

    const theLabel = async ()=>{
        const labelRef = doc(db, 'labels', input )
        const label = await getDoc(labelRef)
        const name = label.data()

        //console.log(name.toString())

    } 

    

    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const addLabel = (e) =>{
        e.preventDefault()

        // const label = {
        //     id: Date.now(),
        //     name: input
        // }
        const labelRef = collection(db, 'labels')
       

        addDoc(labelRef, {
            id:Date.now(),
            name:input,
            timestamp:serverTimestamp(),

        })

        theLabel()
      
        
        //setLabels(prevLabel => [...prevLabel, label])

         setInput("")
    }
     
    const updateLabel = (id, value) =>{
    //    const newLabel = labels.filter(label =>{
    //         if(label.id === id){
    //             return {...label, name: value}
    //         } 
    //         return label
    //     })
        
    //     setLabels(newLabel)

        const labelRef = doc(db, 'labels', id)

         updateDoc(labelRef, {
            name: value,
            timestamp: serverTimestamp()
        })

        }

    const deleteLabel = async (id, name) =>{
      //console.log(id)
        await deleteDoc(doc(db, 'labels', id))

        const todoRef = collection(db, 'todos')
        const q = query(todoRef, where("labelId", "==", id ))
        const snapshot = await getDocs(q)
        //console.log(snapshot)

        const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))

        //console.log(results)

        results.forEach(async(result)=>{
            const docRef = doc(db, 'todos', result.id)
            await deleteDoc(docRef)
        })


        // const todoWithLabel = doc(db, 'todos', where( 'labelId','==', id))

        // console.log(todoWithLabel)

        //todoWithLabel.foreach(todo=> console.log(todo))

        //await deleteDoc(todoWithLabel)
      }



    return (
                <StyledSidebar menu={isShow}>
                    <div className="logo">   
                        <div className={`logo__logo ${theme === 'dark'? 'dark3' : ''}`}>
                            <SiTodoist />
                        </div>
                        <h1 className={`logo__name ${theme === 'dark'? 'dark3' : ''}`}>TODO</h1>
                    </div>
                    <div className={`sidebar__labels ${theme === 'dark'? 'dark2' : ''}`}>
                        <FaTags style={{fontSize: '1.3rem'}} />
                        <p className='sidebar__title'>Labels</p>
                    </div>
        {/*New label input  */}
                    <form className="sidebar__form">
                        <button
                            className='sidebar__addBtn'
                            disabled={!input}
                            onClick={addLabel}
                            type="submit"
                        >
                            <FaPlus style={{color: '#eff2f3', marginRight: '.4rem',}}/>
                            
                        </button>
                        <input
                            className='sidebar__input'
                            type='text'
                            value={input}
                            maxLength="55"
                            onChange={handleInput}
                            placeholder='New label'
                        />
                    </form>

        {/*label list  */}
                    <ul className='label__items'>
                        {
                            labels.map(label =>
                                <Label
                                    name={label.name}
                                    key={label.id}
                                    id={label.id}
                                    updateLabel={updateLabel}
                                    deleteLabel={deleteLabel}
                                    setActiveLabel={setActiveLabel}
                                    activeLabel={activeLabel}
                
                                />
                                )
                        }
                    </ul>
                    <ToggleSwitch />
                
                </StyledSidebar>
        
        
    )
}

export default Sidebar
