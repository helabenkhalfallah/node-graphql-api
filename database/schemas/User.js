import mongoose from 'mongoose';

let userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true // required
    },
    lastName: {
      type: String,
      required: true // required
    },
    email: {
      type: String,
      required: true, // required
      unique: true, // unique email
      trim: true
    },
    password: {
      type: String,
      required: true // required
    },
    username: {
      type: String,
      unique: true, // unique username
      required: true, // required
      trim: true
    },
    birthday: String,
    phone: String,
  },
  {
    collection: 'User'
  })

const User = mongoose.model('User', userSchema);

export default User;