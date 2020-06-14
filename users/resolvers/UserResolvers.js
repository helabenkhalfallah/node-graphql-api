import {
  UserProvider
} from '../../database';

const {
  getUsers,
  userByEmail,
  addUser,
  updateUser,
  addPost,
} = UserProvider;

const UserResolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { email }, context) => userByEmail(_, email, context),
  },
  
  Mutation: {
    addUser: (_, params, context) => addUser(_, params, context),
    updateUser: (_, params, context) => updateUser(_, params, context),
    deleteUser: (_,  { email }, context) => null,
    addPost: (_, params, context) => addPost(_, params, context),
  }
};

export default UserResolvers;
