const express = require('express');
const loginController = require('./controllers/login');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();
app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('style'));

app.get('/', loginController.rootAccessControl);

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', urlencodedParser, [
  check('username', '名前を入力してください')
    .exists(),
  check('email', 'メールアドレスの形式で入力してください')
    .isEmail()
    .normalizeEmail(),
  check('password', 'パスワードは７文字以上で入力してください')
    .isLength({ min: 7 })
    .custom((value, { req }) => {
      if(req.body.password !== req.body.confirmPassword) {
        throw new Error('入力したパスワードと確認用のパスワードが一致しません');
      }
      return true;
    })
], (req, res) => {
  const errors = validationResult(req);
  const username = req.body['username'];
  // emailフォームが空の場合に送信するとなぜか@のみvalueに格納されているので以下の４行の処理を行う
  let email = req.body['email'];
  if(email === '@') {
    email = '';
  }
  if(!errors.isEmpty()) {
    const errors_array = errors.array();
    res.render('register', {
      errors_array,
      username,
      email
    });
  } else {
    res.render('dashboard', {
      username
    });
  }
});

app.listen(3000, () => {
  console.log('Start express server by specifying port 3000.');
});
