const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));
    app.post('/api/todos', todosController.create);
    app.get('/api/todos', todosController.list);
    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.get('/api/todos/:todoID', todosController.retrieve);
    app.put('/api/todos/:todoId', todosController.update);
    app.delete('/api/todos/:todoId', todosController.destroy);
    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
    app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

    // For any other request method on the todo items, we're going yo return "Method Not Allowed"
    app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};