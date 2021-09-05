

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', ( paylod , callbak) => {

        const id = 123456;
        callbak({ id, fecha: new Date().getTime() });

        socket.broadcast.emit('enviar-mensaje', paylod);
    });  
}

module.exports = {
    socketController
}
