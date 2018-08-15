var socket = io();

socket.on('connect', () => {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'Egberto',
        text: 'Wazzap',
        createdAt: 123
    });

});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});
