
const PostType = `
  input PostInput {
    text: String!
    user: String!
  }

  type PostType {
    id: ID!
    text: String!
    user: String!
    createdAt: DateTime!
  }
`

export default PostType;