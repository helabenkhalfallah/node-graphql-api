import mongoose from 'mongoose';

let userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name required"]
    },
    lastName: {
      type: String,
      required: [true, "Last Name required"]
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true, // unique mail
      validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email!"
      },
      required: [true, "Email required"]
    },
    password: {
      type: String,
      required: true // required
    },
    username: {
      type: String,
      unique: true, // unique username
      required: [true, "Last Name required"],
      trim: true
    },
    birthday: {
      type: String,
    },
    phone: {
      type: String,
    },
    isConnected: {
      type: Boolean,
      default: false,
    },
    numberOfFollowers: {
      type: Number,
      default: 0,
    }
  },
  {
    collection: 'User'
  })

const User = mongoose.model('User', userSchema);

export default User;