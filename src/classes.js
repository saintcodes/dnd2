const UserObject = {
  firstName: 'Sinclair',
  lastName: 'Shang',
  signup: function () {
    console.log(this.firstName, 'signed up!')
  }
}
//classes are data structures that allow us to create blueprints for future objects

console.log(UserObject)



class User {
  //constructor tells JS what any given instance of a User consists of
  //constructor() is called automatically any time you say "new" in JS

  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }

  signup() {
    console.log(this.name, 'signed up!')
  }
}

let user = new User("Michael", 'michael@gmail.com', '11123132')

user.signup()

console.log(user)
console.log(user.signup())