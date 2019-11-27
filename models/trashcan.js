var mongoose = require('mongoose');

   var TrashCanSchema = new mongoose.Schema ({
        weight: Number,
        isFull: Boolean
        });


    var TrashCanModel = mongoose.model('TrashCan', TrashCanSchema );
    
 module.exports = TrashCanModel;