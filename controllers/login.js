exports.rootAccessControl = (req, res) =>{
   console.log("Access root node.")
   let param = {
       title: "Laravel",
       loginLink: {href: "/", text: "Login"},
       registerLink: {href: "/register", text: "Register"},
       form: {email: "E-mail Address", password: "Password"}
   }
   res.render("index", param)
}
