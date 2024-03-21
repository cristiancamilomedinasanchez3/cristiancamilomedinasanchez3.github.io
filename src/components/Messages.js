// import React from 'react'
// import { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import { useRef } from 'react';

// function Messages()  {
//   const messagesEndRef = useRef(null);
// const [receiveMessage, setReceiveMessage] = useState([])

// const socketRef = useRef();
// // Logica coneccion backend


// const apiSendMessage = "http://localhost:4000/sendMessage"



// // traer mensajes desde el chat websocket.io
// useEffect(() => {
// // 
//   socketRef.current = io('http://localhost:4000', { path: '/socket' });


//   socketRef.current.on('mensajeDesdeServidor', (data) => {
//     setReceiveMessage((prevMessages) => {
//       return [...prevMessages, { name: data.name, city: data.city, message: data.message, imagen: data.imagen }];
//     });
  
// scrollToBottom()  
  
  
//       });


//   // Limpieza al desmontar el componente
//   return () => {
//     if (socketRef.current) {
//       socketRef.current.disconnect();
//     }
//   };


// }, [socketRef, receiveMessage]);


// // LOGICA PARA DESPLAZAR EL SCROLL CADA VEZ QUE SE ENVIE UN MENSAJE

// const scrollToBottom = () => {
//   if (messagesEndRef.current) {
//     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//   }
// };



//   return (
//     <div>
//       <h2>Mensajes Recibidos:</h2>
//       <div className='messages'>
//         {receiveMessage.map((message, index) => (
          
//           <h3 key={index} className='background-messages'>
//             <div style={{display: "flex", flexDirection: "row"}}>
//               {message.imagen && <img className='img-message' src={`http://localhost:4000/public/uploads/${message.imagen}`} alt="Imagen de perfil" /> }
//               <div style={{display: "flex", flexDirection: "column", marginLeft: "10px"}}>
//               <span style={{color: "red"}}> {message.name} </span>
//               <span style={{color: "yellow"}}> DESDE {message.city}</span>
//               </div>
              
//               </div>
//               <div className='container-message'>
//               <p className='p-message'> DICE: {message.message}</p>
//               </div>
              
//           </h3>
          
//         ))}
//          <div ref={messagesEndRef} />
//       </div>
//     </div>
//   );
// };
// export default Messages


import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

function Messages() {
  const [receiveMessage, setReceiveMessage] = useState([]);
  const messagesEndRef = useRef(null);
  const socketRef = useRef();

  // Logica coneccion backend
  const apiSendMessage = "https://amfind-server.onrender.com/sendMessage";

  // traer mensajes desde el chat websocket.io
  useEffect(() => {
    socketRef.current = io('https://amfind-server.onrender.com', { path: '/socket' });

    socketRef.current.on('mensajeDesdeServidor', (data) => {
      setReceiveMessage((prevMessages) => [...prevMessages, { name: data.name, city: data.city, message: data.message, imagen: data.imagen }]);
    });

    // Scroll hacia abajo cuando se recibe un nuevo mensaje
    scrollToBottom();

    // Limpieza al desmontar el componente
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [socketRef, receiveMessage]);

  // Scroll hacia abajo cuando se recibe un nuevo mensaje
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* <h2>Mensajes Recibidos:</h2> */}
      <div className='messages' style={{ overflowY: 'auto', maxHeight: '400px' }}>
        {receiveMessage.map((message, index) => (
          <h3 key={index} className='background-messages'>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {message.imagen && <img className='img-message' src={`https://amfind-server.onrender.com/public/uploads/${message.imagen}`} alt="Imagen de perfil" />}
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                <span style={{ color: "red" }}> {message.name} </span>
                <span style={{ color: "yellow" }}> DESDE {message.city}</span>
              </div>
            </div>
            <div className='container-message'>
              <p className='p-message'> DICE: {message.message}</p>
            </div>
          </h3>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Messages;