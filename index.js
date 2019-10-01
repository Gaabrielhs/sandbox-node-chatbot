const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on('connection', function(socket){
    console.log('a user connected')

    socket.on('chat-message', function(content){
        console.log(content);
        io.emit('chat-message', content)
    })
    
    socket.on('disconnect', function(){
        console.log('a user disconnected')
    })
})


http.listen(8000, function(){
    console.log('Server started at port:8000')
})