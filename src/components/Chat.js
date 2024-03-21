import React from 'react'
import Inputs from './Inputs'
import Messages from './Messages'
import PresentacionUser from './PresentacionUser'
import { useEffect } from 'react'

function Chat({setVisibility1, setVisibility2, setVisibility3, usuarioPresente, setUsuarioPresente}) {

useEffect(() => {
console.log("este es el valor que esta llegando a usuarioPresente: " + JSON.stringify(usuarioPresente))
}, [])




const visibilitySettingsFunction = () => {
    setVisibility1(false)
    setVisibility2(false)
    setVisibility3(true)
}

  return (
    <div className='container-chat' style={{display: "flex", flexDirection: "row"}}>


<React.Fragment>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign:"center"}}>
<div>
<PresentacionUser usuarioPresente={usuarioPresente} />
</div>

<div style={{display: "flex", flexDirection: "row"}}>
    <div className='container-chatseccion' style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
<Messages />
    <Inputs usuarioPresente={usuarioPresente} />
    </div>

    <div className='container-leter-settings'>
        <h1>Need change your perfil?</h1>
        <button className='button-changeperfil' onClick={visibilitySettingsFunction}>Here Click</button>
    </div>
    </div>
    </div>
</React.Fragment>

    </div>
  )
}

export default Chat