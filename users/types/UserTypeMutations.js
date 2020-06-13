const UserTypeMutations = `
  type Mutation {
    addUser(firstName: String!, lastName: String!, birthday: DateTime, phone: String, email: String!, username: String!, password: String!): UserType
    updateUser(firstName: String!, lastName: String!, birthday: DateTime, phone: String, username: String!, email: String!): UserType
    deleteUser(email: String!): UserType
  }
`

export default UserTypeMutations;





