
const PostType = `
  type PostType {
    id: ID!
    text: String!
    createdAt: DateTime!
    user: UserType!
  }
`

export default PostType;