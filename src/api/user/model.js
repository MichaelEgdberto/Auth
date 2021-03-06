const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// >> Here will be the User schema.
const UserSchema = new mongoose.Schema({
  username: { type: String, index: true, required: true }, // required
  password: { type: String, required: true }, // required
  firstname: { type: String, index: true, required: true }, // required
  lastname: { type: String, index: true, required: true }, // required
  email: { type: String, index: true, required: true }, // required
  deleted: { type: Boolean, required: false }, // optional
},
{
  collection: 'UserTables',
  timestamps: { createdAt: true, updatedAt: true },
}
);

// >> Here will be the pre methods for the schema.
UserSchema.pre('save', function(next) {
  if(this.password && this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});


// >> Here will be the User methods for the schema.
UserSchema.methods = {
  comparePassword(password) {
      return bcrypt.compareSync(password, this.password);
  }
};



// >> Here will be the User model using the User schema.
const UserModel= mongoose.model('users', UserSchema);

module.exports = {
  schema: UserSchema,
  model: UserModel,
}