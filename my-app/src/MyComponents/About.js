import React from 'react'

export const About = () => {
    let myaboutstyle={
        'height':"100vh",
        padding:"50px",
        'text-align':"justify"
    }
  return (
   <>
     <div style={myaboutstyle}><h1 className="text-center ">About ToDo List</h1><hr/>
    <p>
    The Todo List Basic App is a simple yet efficient application designed to help users organize and manage their tasks effectively. With its user-friendly interface and essential features, this app provides a seamless experience for creating, tracking, and completing tasks. 

    </p></div>
   </>
  )
}
