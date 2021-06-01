var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res){
res.status(200).send("hola mundo de sockets");
});

io.on('connection', function(socket){
console.log('Alguien se ha conectado usando sockets')
/*aqui controlamos los eventos del cliente mediante sockets*/
socket.emit('messages',{
    id: 1,
    texto: "Hola soy un mensaje",
    autor: "Kevin Andres Castillo Casas"
  });
});
server.listen(3000, function(){
console.log("El servidor esta corriendo en http://localhost:3000")
});