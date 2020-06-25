module.exports = function (app) {
    const users = require('../controller/user.controller')


    //create a new user
    app.post('/api/user/', users.create)

    //Retrieve all Users
    app.get('/api/users', users.findAll)

    //Retrieve a single user by Id
    app.get('/api/users/:userId', users.findById)

    //Retrieve a single user by age
    app.get('/api/users/age/:age', users.findByAge)

    //Update a user with id
    app.put('/api/user/:userId', users.update)

    //Delete a user with id
    app.delete('/api/user/:userId', users.delete)

}