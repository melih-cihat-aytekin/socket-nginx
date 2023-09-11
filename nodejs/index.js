const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // CORS middleware'ini ekleyin

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000", // İstemci adresini buraya ekleyin
        methods: ["GET", "POST"]
    },
});

// Tüm kaynaklara erişim izni vermek için CORS middleware'ini kullanın
app.use(cors());

io.on('connection', (socket) => {
    console.log('Bir kullanıcı bağlandı');

    socket.on('disconnect', () => {
        console.log('Bir kullanıcı ayrıldı');
    });
});

server.listen(5000, () => {
    console.log('Sunucu 5000 portunda çalışıyor');
});
