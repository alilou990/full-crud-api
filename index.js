
//require packages
const express = require('express');
const cors = require('cors')

//require controllers
const ctrl = require('./controllers/crudOperations')
const swapiCtrl = require('./controllers/httpOpterations')

//Create the server instance
const app = express();


//Top Level Middleware to Parse JSON to JS
app.use(express.json());
app.use(cors())


app.get('/users', ctrl.getUsers);
app.get('/user/:id', ctrl.getUserByParam)
app.get('/user', ctrl.getUserByQuery)
app.post('/users', ctrl.createNewUser
);
app.put('/users/:id', ctrl.updateUser)
app.delete('users/:id', ctrl.deleteUser)

app.get('/swapi/users/:page', swapiCtrl.getSwapiCharacters)

app.listen(8080, () => console.log('server is working 👾'))




