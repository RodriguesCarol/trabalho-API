// User Model
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// Simulated user database
const users = [
  new User('admin', 'admin123'),
  new User('user', 'user123')
];

module.exports = { User, users };
