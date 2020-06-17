import {
  UserProvider,
  PostProvider,
} from '../../database';

const {
  getUsers,
  userByEmail,
  addUser,
  updateUser,
} = UserProvider;

const {
  addPost,
} = PostProvider;

const UserResolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { email }, context) => userByEmail(_, email, context),
  },
  
  Mutation: {
    addUser: (_, params, context) => addUser(_, params, context),
    addUser1: (_, params, context) => addUser(_, params.user, context),
    updateUser: (_, params, context) => updateUser(_, params, context),
    deleteUser: (_,  { email }, context) => null,
    addPost: (_, params, context) => addPost(_, params, context),
  }
};

export default UserResolvers;
