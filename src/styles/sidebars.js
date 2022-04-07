import styled from 'styled-components'

export const StyledSidebar = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${props=>props.theme.sidebar.backgroundColor};
    color:${props=>props.theme.sidebar.color};
    height: 100vh;
    overflow: hidden;
    padding: 2rem .95rem;
    width: 38vw;

`

export const StyledTodo = styled.div`
    width: 100%;
    height:100vh;
    overflow:hidden;
    background-color:${props=> props.theme.todos.backgroundColor};
`

export const StyledThemeBtn = styled.div`
    display:inline-flex;
    align-items:center;
    padding:1rem;
    gap: .5rem;
    border-radius:30px;
    cursor:pointer;
    background-color:${props=> props.theme.themeBtn.backgroundColor}; 
    color:${props=> props.theme.themeBtn.color};
    
    &:hover{
        background-color:${props => props.theme.themeBtn.hover};
    }
`

export const DarkMode = {
    sidebar:{
        backgroundColor: '#121212',
        color: '#3b4446'
    },
    todos:{
        backgroundColor:'#252525',
    },
    themeBtn:{
        backgroundColor:'#e9e9e9',
        color: '#3b4446',
        hover: '#cccccc'
    }
}

export const LightMode = {
    sidebar:{
        backgroundColor: '#e9e9e9',
        color: '#3b4446'
    },
    todos:{
        backgroundColor: '#fff',
        color: ''
    },
    themeBtn:{
        backgroundColor:'#3b4446',
        color: '#fff',
        hover:'#23282a'
    }
}