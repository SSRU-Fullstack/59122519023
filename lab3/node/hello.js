
// for (i=0; i<3; i++){
//     console.log("hello World");
//     }
    
    const textinput = require('readline')
    
    const rl = textinput.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    
    // rl.question('What do you think of Node.js? ', (answer) => {
    //     // TODO: Log the answer in a database
    //     console.log(`Thank you for your valuable feedback: ${answer}`);
      
    //     rl.close();
    //   });
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/

var net = require('net');

var server = net.createServer((socket) => {
	socket.write('Echo server\r\n');
    socket.pipe(socket);
    socket.on('data', function(data){
		// console.log(data);
		textChunk = data.toString('utf8');
		// console.log(textChunk);
		socket.write("server: " + textChunk);
	});
});

server.listen(1337, '127.0.0.1');

/*
And connect with a tcp client from the command line using netcat, the *nix 
utility for reading and writing across tcp/udp network connections.  I've only 
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

rl.on('line', (data) =>{
    client.write('You: '+data)
})

client.on('data', function(data) {
    console.log('Received: ' + data);
    if(data == 'exit'){
	    client.destroy(); // kill client after server's response
    }
});

client.on('close', function() {
	console.log('Connection closed');
});

