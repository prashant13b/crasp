var mongoose = require('mongoose')

var user = new mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  urls: [{
    url: String,
    done: Boolean
  }]
})

module.exports = mongoose.model('User', user);