var net = require('net');
const textinput = require('readline')
    
    const rl = textinput.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      var client = new net.Socket();
      client.connect(1337, '127.0.0.1', function() {
          console.log('Connected');
          client.write('Hello, server! Love, Client.');
      });
       
      
      client.on('data', function(data) {
          console.log('Received: ' + data);
          client.destroy(); // kill client after server's response
      });
      
      client.on('close', function() {
          console.log('Connection closed');
      });