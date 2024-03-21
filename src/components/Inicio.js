import { toHaveFormValues } from '@testing-library/jest-dom/matchers'
import React from 'react'
import { useState, useEffect } from 'react'
import logoImg from '../assets/sinfondo/logo-vacations-chat-removebg-preview.png'


function Inicio({setVisibility1, setVisibility2, setVisibility3, setUsuarioPresente}) {
    const [totalUsers, setTotalUsers] = useState([])
    const [user, setUser] = useState({name: "", city: "", imagen: null})

// TRAYENDO USUARIOS BASE DE DATOS

const getUsers = (e) => {
  fetch("https://amfind-server.onrender.com/traerUsuarios")
    .then(res => {
      if (!res.ok) {
        throw new Error('No se pudo obtener la lista de usuarios');
      }
      return res.json();
    })
    .then(data => {
      setTotalUsers(data);
      // Aquí puedes llamar a submitFunction
      submitFunction(e); // O proporciona cualquier argumento necesario
    })
    .catch(error => {
      console.error('Error al obtener la lista de usuarios:', error);
      // Puedes manejar el error de acuerdo a tus necesidades,
      // por ejemplo, establecer una lista vacía de usuarios
      setTotalUsers([]);
      // Aquí también puedes llamar a submitFunction
      submitFunction(e); // O proporciona cualquier argumento necesario
    });
}



useEffect(() => {
getUsers()
}, [])

useEffect(() => {
  
// console.log("estos son los usuarios que estan llegando al frontend: " + totalUsers)
}, [totalUsers])


// FUNCION ENVIAR USUARIO AL BACKEND 


// FUNCION PRINCIPAL DE SELECCION

const functionAnaliticUserIfPresent = (e) => {
const userPresent = totalUsers.find((userN) => {
  return userN.name === user.name 
})

if(userPresent){
setUsuarioPresente(userPresent)
visibilityChatFunction(e)
}else if (!userPresent){
 submitFunction(e)
}

}



    // FUNCIONES DE CAMBIO

const changleFunction = (e) => { 
        const { name, value } = e.target;
        setUser(prevState => ({
          ...prevState,
          [name]: value
        }));
      
}




// FUNCION DE ENVIO

const sendUsuario = () => {
  const apiSendUsuario = 'https://amfind-server.onrender.com/introducirUsuario'
  
    const opciones = {
      method: 'POST', // Método de la solicitud
      headers: {
          'Content-Type': 'application/json' // Tipo de contenido que estás enviando (en este caso, JSON)
      },
      body: JSON.stringify(user) // Los datos que estás enviando, convertidos a formato JSON
  };
  
  fetch(apiSendUsuario, opciones)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al enviar los datos.');
          }
          return response.json(); // Convertir la respuesta del servidor a JSON
      })
      .then(data => {
          console.log('Datos recibidos:', data); // Hacer algo con los datos recibidos del servidor
      })
      .catch(error => {
          console.error('Error:', error); // Manejar cualquier error que ocurra durante la solicitud
      });
  
   
  
}


const submitFunction = (e) => {



// console.log("esto es lo que se esta enviando al backend " + user)
sendUsuario()


    setUsuarioPresente(user)
visibilityChatFunction(e)
}

    const visibilityChatFunction = (e) => {
        e.preventDefault()
        setVisibility1(false)
        setVisibility2(true)
        setVisibility3(false)
    }

  return (
    <form className='inicio-form-container'>

      <div className='title-container'>
        <h2>Bienvenido a Beach Chat el Chat en el cual podra conocer personas para sus vacaciones y viajes de manera muy sencilla.</h2>
      </div>

      <div>
        <img src={logoImg} className='img-logo' />
        <h1 className='logo-words' ><span style={{color: "#FF4500"}}>Beach</span> <span style={{color: "#1560BD"}}>Chat</span></h1>
      </div>

      <div className='input-container'>

<input className='input-form' name='name' type='text' onChange={changleFunction} placeholder='name' />

<input className='input-form' name='city' type='text' onChange={changleFunction} placeholder='city' />


</div>

<button className='button' onClick={(e) => functionAnaliticUserIfPresent(e)}>Ingresar</button>

    </form>
  )
}

export default Inicio