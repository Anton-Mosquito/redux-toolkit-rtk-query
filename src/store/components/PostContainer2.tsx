import React from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
  const {data: posts, error , isLoading} = postApi.useFetchAllPostsQuery(5);
  
  return (
    <div>
      <div className="post__list">
        {/* {isLoading && <h1>Loading .....</h1>}
        {error && <h1>Error occur</h1>}
        {posts?.map((post) => 
        <PostItem post={post} key={post.id}/>)} */}
      </div>
    </div>
  );
  
};

export default PostContainer2;
