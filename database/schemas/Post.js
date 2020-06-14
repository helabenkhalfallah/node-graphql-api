import mongoose from 'mongoose';

let postSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true // required
    },
    user: {
      type: String,
      required: true // required
    },
    createdAt: {
      type: Date, 
      default: Date.now,
      required: true // required
    },
  },
  {
    collection: 'Post'
  })

const Post = mongoose.model('Post', postSchema);

export default Post;