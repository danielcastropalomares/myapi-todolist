const { update } = require('../models/todos');
const Todos = require('../models/todos')

//get all todos from database
exports.getTodo = async (req,res) => {
    try {
        const todos = await Todos.find()
        res.json(todos)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

//get a specific todo id or name
exports.getTodoId = async (req,res) => {
    try {
        todoId = await Todos.findById(req.params.id)
        //If the result is null, return 404 not found
        if (todoId == null) {
            return res.status(404).json({ message: `Todo not found ${req.params.id}`})
        } else {
            return res.json(todoId);            
        }
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

//get a specific todo  name
exports.getTodoName = async (req,res) => {
    try {
        todoName = await Todos.findOne({name:req.params.name})
        res.status(200).json(todoName)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

//post a new todo
exports.postTodo = async (req,res) => {
    //save the request body in the next schema
    const todoRequest = new Todos({
        name: req.body.name
    })
    try {
        const newTodo = await todoRequest.save()
        res.status(201).json(newTodo)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

//delete a todo with name
exports.delTodoName = async (req,res) => {
    try {
        todoName = await Todos.findOneAndRemove({name:req.params.name})
        //if the id is not found, return 404
        if (todoName == null) {
            return res.status(404).json({ message: `Todo name not found ${req.params.name}`})
        } else {
            res.json({ message: `Deleted ${req.params.name}`})            
        }
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

//delete a todo with id
exports.delTodoId = async (req,res) => {
    try {
        todoId = await Todos.findByIdAndDelete((req.params.id))
        //if the id is not found, return 404
        if (todoId == null) {
            return res.status(404).json({ message: `Todo id not found ${req.params.id}`})
        } else {
            res.json({ message: `Deleted ${req.params.id}`})            
        }
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}