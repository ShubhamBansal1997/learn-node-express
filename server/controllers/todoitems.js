const TodoItem = require('../models').TodoItem;

module.exports = {
    create(req, res) {
        return TodoItem
            .create({
                content: req.body.content,
                todoId: req.params.todoId
            })
            .then(todoItem => res.status(201).send(todoItem))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return TodoItem
            .find({
                where: {
                    id: req.params.todoItemId,
                    todoId: req.params.todoId,
                },
            })
            .then(todoItem => {
                if (!todoItem) {
                    return res.status(404).send({
                        message: 'TodoItem Not Found',
                    });
                }

                return todoItem
                    .update(req.body, { fields: Object.keys(req.body) })
                    .then(updateTodoItem => res.status(200).send(updateTodoItem))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    
    destroy(req, res) {
        return TodoItem
            .find({
                where: {
                    id: req.params.todoItemId,
                    todoId: req.params.todoId,
                },
            })
            .then(todoItemId => {
                if (!todoItem) {
                    return res.status(404).status({
                        message: 'TodoItem Not Found',
                    });
                }

                return todoItem
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};