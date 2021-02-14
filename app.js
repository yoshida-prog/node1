const express = require('express');
const loginController = require('./controllers/login');
const registerController = require('./controllers/register');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('style'));
app.get('/', loginController.rootAccessControl);
app.get('/register', registerController.rootAccessControl);

app.listen(3000, () => {
  console.log('Start express server by specifying port 3000.');
});
