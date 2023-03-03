import './achild.css'

import React from 'react';
import './App.css'

interface childShade{
  title:string;
  body:string;
  children:React.ReactNode;
  styles?: React.CSSProperties;
  className?:string;
}

function AChildComponentProps( props: childShade){
  const {title, body, children, styles, className} = props;
  return(
    <div style={styles} className={className}>
      <h1>{title}</h1>
      <p>{body}</p>
      <div>{children}</div>
    </div>
  )
}

function App() {


  return (
    <div className="App">
      <AChildComponentProps className='Achild' styles={{backgroundColor:"teal", padding:"20px", borderRadius:"20px"}} title='Projects' body='This is all the sample projects I have created.'>
        <p>Hello world</p>
      </AChildComponentProps>
    </div>
  )
}

export default App
