exports.rootAccessControl = (req, res) => {
  const param = {
    title: 'Laravel',
    loginLink: {
      href: '/',
      text: 'Login'
    },
    registerLink: {
      href: '/register',
      text: 'Register'
    },
    form: {
      name: 'Name',
      email: 'E-mail Address',
      password: 'Password',
      confirm: 'Comfirm Password'
    }
  }
  res.render('register', param);
};
