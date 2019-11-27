var express = require('express')
var router = express.Router()
const db = require('../../firebaseInit.js')
var mqttClient = require('../../MQTT/mqttReciever.js')
var sizeof = require('sizeof');

var anyObject = {
    
    'key' : {
        name: 'Jesper'
    }
}
console.log(sizeof.sizeof(anyObject));
firestore = db.firestore();
router.get('/', (req, res, next) => {
    res.status(200).json( {
        message: 'Handling get requests for trashcans'
    });
});
router.post('/', (req, res, next) => {
    
    firestore.collection('trashcans').add(req.body)
    res.status(200).json( {
        message: req.body
    });
});

mqttClient.addListener('message', function (topic, message) {
    console.log(message.toString());
    var trashCAnToUpdate = JSON.parse(message.toString());
    
    firestore.collection('trashcans').doc('TcY45AwU2x6CyyIlywrq').update(trashCAnToUpdate)
   
});



module.exports = router