const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

//this creates a basic socet connection with a uniwue id everytime
io.on('connection', (socket) => {
    console.log('a user connected', socket.id)
    socket.on("from_client", () => {
        console.log("event coming from clinet")
    })
    setInterval(() => {
        socket.emit('from_server')
    }, 2000)
});
//middleware for static files
app.use('/', express.static(__dirname + "/public"))



server.listen(3000, () => {
    console.log(`Server is listening at 3000 port`)
})