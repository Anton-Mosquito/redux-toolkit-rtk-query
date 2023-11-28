import React, { useEffect, useState } from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const {data: posts, error , isLoading, refetch} = postApi.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postApi.useCreatePostMutation();
  const [updatePost, {}] = postApi.useUpdatePostMutation();
  const [removePost, {}] = postApi.useDeletePostMutation();



  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(5)
    // }, 2000);
  }, [])

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    removePost(post)
  }
  
  const handleUpdate = (post: IPost) => {
    updatePost(post);
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new Posts</button>
        {isLoading && <h1>Loading .....</h1>}
        {error && <h1>Error occur</h1>}
        {posts?.map((post) => 
        <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id}/>)}
      </div>
    </div>
  );
  
};

export default PostContainer;
