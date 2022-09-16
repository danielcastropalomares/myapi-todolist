var express = require('express');
var router = express.Router();
const { update } = require('../models/todos');
const Todos = require('../models/todos')

//import todo controllers
const todos_controller = require("../controllers/todos");


router.get('/', todos_controller.getTodo);
router.get('/:id', todos_controller.getTodoId);
router.get('/name/:name', todos_controller.getTodoName);
router.post('/',todos_controller.postTodo);
router.delete('/name/:name',todos_controller.delTodoName);
router.delete('/:id',todos_controller.delTodoId)

module.exports = router;
