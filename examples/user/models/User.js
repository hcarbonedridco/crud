
/**
 * Module dependencies
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

/**
 * UserModel
 *
 * Will be passed to Crud for dissection. Crud will then normalize and simplify
 * the JSON-object to something fairly human-friendly.
 */

var User = new Schema({
    'name': {
        'first': {type: String, required: true}
      , 'last': String
    }
  , 'email': {
        'home': {type: String, match: /[\w]+@[\w]+\.[\w]{2,3}/}
      , 'work': {type: String, match: /[\w]+@[\w]+\.[\w]{2,3}/}
    }
  , 'phone': {type: String, match: /[\d]{8}/, override: 'tlf'}
  , 'born': Date
  , 'about': {type: String, min: 80}
})

/**
 * Expose User to mongoose
 */

mongoose.model('User', User)

