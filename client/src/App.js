import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
});


function App() {

  const [msg, setMsg] = useState('')

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Sunucuya bağlandı');
      setMsg('Sunucuya bağlandı');
    });

    socket.on('disconnect', () => {
      console.log('Sunucudan ayrıldı');
      setMsg('Sunucudan ayrıldı');
    });
  }, []);

  return (
    <div className="App">
      <h1>Socket.io Bağlantısı</h1>
      <div>{msg}</div>
    </div>
  );
}

export default App;
