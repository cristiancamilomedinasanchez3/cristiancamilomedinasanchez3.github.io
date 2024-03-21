import React from 'react'
import imgPalma from '../../assets/sinfondo/logo-vacations-chat-removebg-preview.png'
import { useState } from 'react'
import SendImagen from '../SendImagen'

function Settings({setUsuarioPresente,usuarioPresente ,setVisibility1, setVisibility2, setVisibility3}) {
const [visibility4, setVisibility4] = useState(true)
const [visibility5, setVisibility5] = useState(false)  //cambiar datos
const [visibility6, setVisibility6] = useState(false)  //subir imagen



const functionReturnToChat = () => {

  setVisibility1(false)
  setVisibility2(true)
  setVisibility3(false)

}

const functionShowChangeDates = () => {
  setVisibility4(false)
  setVisibility5(true)
  setVisibility6(false)
}

const functionShowChangePhoto = () => {
  setVisibility4(false)
  setVisibility5(false)
  setVisibility6(true)
}

  return (
    <div>
<div className='container-settings'>


{visibility4 && <div className='container-buttons'>
  <button className='button-setting'onClick={functionShowChangeDates}>Cambiar Datos</button>
  <button className='button-setting' onClick={functionShowChangePhoto}>Subir Imagen</button>
  <button onClick={functionReturnToChat} className='button-setting' id='button-img'></button>
  </div>}

  {
    visibility5 && <div>
               
                   <h1>{usuarioPresente.name}</h1>
                   <button className='button'>Challenge</button>
                   <h1>{usuarioPresente.city}</h1>
                   <button className='button'>Challenge</button>

       </div>
  }

  {
    visibility6 && <React.Fragment>
<SendImagen usuarioPresente={usuarioPresente} setUsuarioPresente={setUsuarioPresente} />
    </React.Fragment>
  }

</div>

    </div>
  )
}

export default Settings