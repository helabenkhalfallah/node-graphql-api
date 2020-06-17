const UserTypeMutations = `
  type Mutation {
    addUser(firstName: String!, lastName: String!, birthday: DateTime, phone: String, email: String!, username: String!, password: String!): UserType
    updateUser(firstName: String!, lastName: String!, birthday: DateTime, phone: String, username: String!, email: String!): UserType
    addUser1(user: UserInput): UserType
    updateUser1(user: UserInput): UserType
    deleteUser(email: String!): UserType
    addPost(text: String!, user: String!): PostType
    addPost1(user: PostInput): PostType
  }
`

export default UserTypeMutations;





