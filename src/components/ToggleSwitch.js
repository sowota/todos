import React from 'react'
import '../css/sidebar.css'

import { themeContext } from '../context/themeContext'
import {FaRegMoon, FaSun} from 'react-icons/fa'

import { StyledThemeBtn } from './../styles/sidebars';

function ToggleSwitch() {
    
    const{theme, themeToggler} = React.useContext(themeContext)

   

    return (
        <div className='sidebar__toggle'>
            <div onClick={()=>themeToggler()}>
                {theme=== 'dark'?
                <StyledThemeBtn>
                    <p>Light</p>
                    <FaSun /> 
                </StyledThemeBtn>
                :
                <StyledThemeBtn>
                    <p>Dark</p>
                    <FaRegMoon />
                </StyledThemeBtn>
                
                }
            </div>
        </div>
    )
}

export default ToggleSwitch
