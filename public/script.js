var socket = io()

const exec = () => {
    socket.emit('from_client')
}

socket.on('from_server', () => {
    console.log("Collected a new event from server")
    const div = document.createElement('div')
    div.innerText = `New event form server`
    console.log(div)
    document.body.appendChild(div)
})