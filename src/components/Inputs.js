import React, { useState, useRef } from 'react'
import { io } from 'socket.io-client';


function Inputs({usuarioPresente}) {
  const [messageSocket, setMessageSocket] = useState(null)
  const [error, setError] = useState(null)
const [valueText, setValueText] = useState("")
const [errorSocket, setErrorSocket] = useState(null)
const socketRef = useRef()

socketRef.current = io('https://amfind-server.onrender.com', { path: '/socket' });
 


  const challengeTextSocket = (e) => {
  
    setMessageSocket(e.target.value)
  }
  
  const submitFormSocket = (e) => {
    e.preventDefault()
    
    if (socketRef.current) {
      socketRef.current.emit('nuevoMensajeDesdeCliente', { name: usuarioPresente.name, message: messageSocket, city: usuarioPresente.city, imagen: usuarioPresente.imagen ? usuarioPresente.imagen : null });
    }  
    setMessageSocket('');
    document.getElementById("textarea").value = ""
  };

  return (
    <div className='container-input-message'>
        <textarea id='textarea' onChange={challengeTextSocket} className='input-message'></textarea>
        <button onClick={submitFormSocket} className='button-send-message'></button>
    </div>
  )
}

export default Inputs