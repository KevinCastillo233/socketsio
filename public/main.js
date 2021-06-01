/* creamos la variable que permitira al frotend conectarse a nuestro backend*/

var socket= io.connect('http://localhost:3000',{'forceNew':true});

socket.on('messages',function(data){
    console.log(data);
});

/* esto manda al servidor el mensaje connect y aparece en console.log*/
