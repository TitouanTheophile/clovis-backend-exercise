'use strict'

module.exports = (app) => {
  var todoList = require('../controllers/userController');

  app.route('/users')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/users/:userId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
}
