import React from 'react'

export const Footer = () => {
  let footerstyle={
     bottom: "0",
    width:" 100%",
    'margin-bottom':"0"
  }
  return (
    <footer  className="bg-dark text-light" style={footerstyle}> 
    <p className='text-center py-3 my-3'>

    
    Copyright &copy; MyTodoList.com
    </p>
    </footer>
  )
}
