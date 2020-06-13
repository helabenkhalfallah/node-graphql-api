import User from '../schemas/User';

const getUsers = async () => {
  try {
    const users = User.find().exec();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

const userByEmail = async (_, email, context) => {
  try {
    const user = await User.findOne({ email: email }).exec();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const addUser = async (_, params, context) => {
  try {
    const {
      firstName,
      lastName,
      birthday,
      email,
      phone,
      username,
      password,
    } = params || {};
    if(firstName && firstName.length 
        && lastName && lastName.length
        && username && username.length
        && email && email.length
        && password && password.length){
        const user = await User.findOne({ email: email }).exec();
        if(user){
          throw new Error('User already exist !');
        }
        const userModel = new User({
          firstName,
          lastName,
          birthday,
          email,
          phone,
          username,
          password,
        });
        return userModel.save();
    }
    throw new Error('lastName, lastName, username, email and password are required field !');
  } catch (error) {
    throw new Error(error);
  }
}

const updateUser = async (_, params, context) => {
  try {
    const {
      firstName,
      lastName,
      birthday,
      email,
      phone,
      username,
    } = params || {};
    if(firstName && firstName.length 
        && lastName && lastName.length
        && username && username.length
        && email && email.length){
        const user = await User.findOne({ email: email }).exec();
        if(!user){
          throw new Error('User not exist !');
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.birthday = birthday;
        user.phone = phone;
        user.username = username;
        return user.save();
    }
    throw new Error('lastName, lastName, username and email are required field !');
  } catch (error) {
    throw new Error(error);
  }
}

const UserProvider = {
  getUsers,
  userByEmail,
  addUser,
  updateUser,
};

export default UserProvider;