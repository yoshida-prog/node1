const express = require('express');
const bodyParser = require('body-parser');
const loginController = require('./controllers/login');
const registerController = require('./controllers/register');
const registerValidController = require('./controllers/registerValid');

const app = express();
app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.use(express.static('style'));

app.get('/', loginController.rootAccessControl);
app.get('/register', registerController.rootAccessControl);

app.post(
  '/register',
  urlencodedParser,
  registerValidController.rootAccessControl.validCheck,
  registerValidController.rootAccessControl.validResult
);

app.listen(3000, () => {
  console.log('Start express server by specifying port 3000.');
});
