import logo from './logo.svg';
import './App.css';
import React from 'react';
import Inicio from './components/Inicio';
import { useState } from 'react';
import Chat from './components/Chat';
import Settings from './components/settings/Settings';

function App() {
const [visibility1, setVisibility1] = useState(true)
const [visibility2, setVisibility2] = useState(false)
const [visibility3, setVisibility3] = useState(false)
const [usuarioPresente, setUsuarioPresente] = useState()


  return (
    <div className="App">

<React.Fragment>
{visibility1 && <Inicio setVisibility1={setVisibility1} setVisibility2={setVisibility2} setVisibility3={setVisibility3} setUsuarioPresente={setUsuarioPresente} />}

{visibility2 && <Chat setVisibility1={setVisibility1} setVisibility2={setVisibility2} setVisibility3={setVisibility3} setUsuarioPresente={setUsuarioPresente} usuarioPresente={usuarioPresente} /> }

{visibility3 && <Settings setUsuarioPresente={setUsuarioPresente} usuarioPresente={usuarioPresente} setVisibility1={setVisibility1} setVisibility2={setVisibility2} setVisibility3={setVisibility3} />}


</React.Fragment>

      
    </div>
  );
}

export default App;
