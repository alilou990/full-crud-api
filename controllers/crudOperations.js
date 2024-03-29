const users = require('../data')


  //controller functions
  const getUsers = (req, res) => {
    res.status(200).send(users)
}
  
  const getUserByParam = (req, res) => {
    const {id} = req.params;
    for(let i = 0; i < users.length; i++){
        if (users[i].id === +id){
            res.status(200).send(users[i])
        }
    }
}

const getUserByQuery = (req, res) => {
    const {id} = req.query;
    const foundUser = users.filter((user) => {
        if(user.id === +id) return user
    })
    res.status(200).send(foundUser[0])
}

const createNewUser = (req, res) => {
    const newUser = {
        id: users.length +1,
        first_name: req.body.first_name || "",
        last_name: req.body.last_name || "",
        email: req.body.email || "",
        hobbies: req.body.hobbies || [],
        yarn: req.body.yarn || {}
    }
    users.push(newUser);

    res.status(200).send(users)
}

const updateUser = (req, res) => {
    const {id} = req.params;
    for(let i= 0; i<users.length; i++){
        if(users[i].id === +id)
        users[i].first_name="Kyle"
    }
    res.status(200).send(users)
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    user = users.filter((user) => {
        if(user.id !== +id) return user
    })
    res.status(200).send(users)
}

module.exports = {
    getUsers,
    getUserByParam,
    getUserByQuery,
    createNewUser,
    updateUser,
    deleteUser
}