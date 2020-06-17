
const UserType = `
  input UserInput {
    firstName: String!
    lastName: String! 
    birthday: DateTime
    phone: String
    email: String! 
    username: String! 
    password: String! 
    isConnected: Boolean
    numberOfFollowers: Int
  }

  type UserType {
    id: ID!
    firstName: String! @upper
    lastName: String! @upper
    birthday: DateTime
    phone: String
    email: String!
    username: String!
    password: String!
    isConnected: Boolean
    numberOfFollowers: Int
    login: String @deprecated(reason: "Use \`username\`.")
    posts: [PostType]
  }
`

export default UserType;