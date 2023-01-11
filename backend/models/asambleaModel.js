const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsambleaSchema = new Schema({
    usuario:{
        type: Schema.ObjectId,
        ref: 'persona',
        required: true
    },
    date: {
        type: String,
        required: true,
        match: /[0-9]{2}-[0-9]{2}-[0-9]{4}/
    },
    description: {
        type: String,
        required: true,
        match: /[A-Za-z0-9]+/
    },
    type:{
    
        type: String,
        required: true,
        match: /[A-Za-z0-9]+/
    }
});

module.exports = mongoose.model('asamblea', AsambleaSchema);