const UserTypeQueries = `
  type Query {
    users: [UserType]
    user(email: String!): UserType
    posts(email: String!): PostType
  }
`

export default UserTypeQueries;