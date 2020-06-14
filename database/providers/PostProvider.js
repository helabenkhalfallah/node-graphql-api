import Post from '../schemas/Post';

const addPost = async(_, params, context) => {
  try {
    const {
      text,
      user,
    } = params || {};
    if(text && text.length 
       && user && user.length){
        const postModel = new Post({
          text,
          user,
        });
        return await postModel.save();
    }
    throw new Error('user and text are required field !');
  } catch (error) {
    throw new Error(error);
  }
}

const getPostsByUser = async (email) => {
  try {
    const posts = await Post.find({ user: email }).exec();
    return posts;
  } catch (error) {
    throw new Error(error);
  }
}

const PostProvider = {
  getPostsByUser,
  addPost,
};

export default PostProvider;