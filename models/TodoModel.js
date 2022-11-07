const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  taskname: {type: String,},
  status: {type:String, },
  tag:{type:String},
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;