import User from '../schemas/User';
import Post from '../schemas/Post';

const addPost = async(_, params, context) => {
  try {
    const {
      text,
      user,
    } = params || {};
    if(text && text.length 
       && user && user.length){
        const postModel = new Post({
          text,
          user,
        });
        return await postModel.save();
    }
    throw new Error('user and text are required field !');
  } catch (error) {
    throw new Error(error);
  }
}

const getPostsByUser = async (email) => {
  try {
    const posts = await Post.find({ user: email }).exec();
    return posts;
  } catch (error) {
    throw new Error(error);
  }
}

const getUsers = async () => {
  try {
    const users = await User.find().exec();
    if(users && users.length){
      users.forEach(user => {
        const {
          email,
        } = user;
       user.posts = getPostsByUser(email);
      });
    }
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

const userByEmail = async (_, email, context) => {
  try {
    const user = await User.findOne({ email: email }).exec();
    if(user){
      const {
        email,
      } = user;
      user.posts = getPostsByUser(email);
    }
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
        return await userModel.save();
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
        return await user.save();
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
  addPost,
};

export default UserProvider;