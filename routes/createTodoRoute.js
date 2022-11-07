const TodoModel = require('../models/TodoModel');

module.exports = async (req, res) => {
  const {text} = req.body;
  const todo = new TodoModel({
    taskname,
    status: false,
    tag
  })
  const newTodo = await todo.save();
  res.json(newTodo);
};