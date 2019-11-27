var mqtt = require('mqtt')


var client  = mqtt.connect('wss://mqtt.flespi.io', {
  protocolVersion: 5,
  username: 'FlespiToken number',
 
});

client.on('connect', function () {
  client.subscribe('trashCanMessage', function (err) {
  })
})

module.exports = client;