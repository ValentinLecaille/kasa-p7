import React from 'react'
import '../style/Main.css'

function Main(props) {
    const {children} = props.children;
    console.log('children:', children)
    return <div className='main'>{props.children}</div>
}

export default Main