
const UserType = `
  type UserType {
    id: ID!
    firstName: String!
    lastName: String!
    birthday: DateTime
    phone: String
    email: String!
    username: String!
    password: String!
    posts: [PostType]
    isConnected: Boolean!
    numberOfFollowers: Int!
  }
`

export default UserType;