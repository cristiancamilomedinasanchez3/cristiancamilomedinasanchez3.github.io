import React from 'react'
import { useState } from 'react'

function SendImagen({usuarioPresente, setUsuarioPresente}) {
    const [fileState, setFileState] = useState({imagen: null})
    const [loadImage, setLoadImage] = useState("")
    
// creando objeto formdata


const handleSubmitImage = () => {
    if (!fileState.imagen) {
      alert("Seleccione un Archivo");
      return;
    }
  
    const formData = new FormData();
    formData.append('imagen', fileState.imagen);
  
    fetch(`https://server-amfind-2.onrender.com/enviarImagen/${usuarioPresente.id}`, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json()) // Parsear la respuesta como JSON
    .then(data => {
      console.log("imagen enviada a la BD", data.fileName);
      // Actualizar usuarioPresente.imagen con el nombre de archivo de la imagen guardada en el servidor
      setUsuarioPresente({ ...usuarioPresente, imagen: data.fileName });
    })
    .catch(err => console.error("error al subir imagen", err));
  
    setLoadImage("Imagen Enviada");
    setFileState({ imagen: "" });
  }

//   cargando la imagen al estado


const handleChange = (e) => {
    setFileState({imagen: e.target.files[0]})
    setLoadImage("Imagen Cargada")
    }


  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
<div className='container-imagenchallangeseccion'> 
    <img src={`https://server-amfind-2.onrender.com/public/uploads/${usuarioPresente.imagen}`} alt='imagenusuario' />
</div>
{loadImage && <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white"}}>
                <h3>{loadImage}</h3>
                </div>}
       {!usuarioPresente.imagen ? <div className='container-buttons-file' >
<input type='file' onChange={handleChange} name='imagen' />
            <button className='button-sendimagen' onClick={() => handleSubmitImage()}>Subir imagen</button>
            </div> : <h1 style={{textAlign: "center"}}>Imagen Cargada</h1>}
           
    </div>
  )
}

export default SendImagen