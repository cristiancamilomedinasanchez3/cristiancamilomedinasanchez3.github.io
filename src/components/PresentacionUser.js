import React from 'react'
import logoImg from '../assets/sinfondo/logo-vacations-chat-removebg-preview.png'


function PresentacionUser({usuarioPresente}) {
  return (
    <div className='container-presentacionUser'>
 <div  className='container-img-barnav'>
        <img src={logoImg} className='img-logo-chat' />
        <h1 className='logo-words-chat' ><span style={{color: "#FF4500"}}>Beach</span> <span style={{color: "rgba(255, 204, 0, 0.5)"}}>Chat</span></h1>
      </div>


      <div className='presentacion' style={{ padding: "10px"}}>
        <h1>Usuario</h1>
        <h2>Nombre: {usuarioPresente.name}</h2>
        <h2>Ciudad: {usuarioPresente.city}</h2>
        </div>
        
        <div className='container-imgperfil'>
        
    <img className='img-perfil' src={`https://amfind-server.onrender.com/public/uploads/${usuarioPresente.imagen}`} alt='imagenusuario' />
        </div>
    </div>
  )
}

export default PresentacionUser