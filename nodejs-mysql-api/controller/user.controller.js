const db = require('../db_config/db_config')
const User = db.users


//Post an User
exports.create = (req, res) => {

    //Save to DB
    User.create({
        name: req.body.name,
        age: req.body.age
    }).then(user => {
        //send created user to client
        res.send(user)
    }).catch(err => {
        res.status(500).send("Error -> " + err)
    })
}

//Find All Users

exports.findAll = (req, res) => {

    User.findAll().then(users => {
        //Send all users to client
        res.send(users)
    }).catch()
}

//Find an user by Id
exports.findById = (req, res) => {

    User.findById(req.params.userId).then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send("Error ->" + err)
    })
}



//Find an user by Age
exports.findByAge = (req, res) => {

    User.findAll({
        where: {
            age: req.params.age
        }
    }).then(users => {
        //Send all users to client
        users => {
            res.send(users)
        }
    }).catch(err => {
        res.status(500).send("Error -> " + err)
    })
}


//Update a customer
exports.update = (req, res) => {
    var User = req.body
    const id = req.params.userId
    //delete user
    User.update(
        {
            name: req.body.name,
            age: req.body.age,
            active: req.body.active,
        },
        {
            where: {
                id: req.params.userId
            }
        }
    ).then(() => {
        res.status(200).send(user)
    }).catch(err => {
        res.status(500).send("Error -> " + err)
    })
}




// Delete a User by Id
exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('User has been deleted!');
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    });
};