import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>All post Here: {posts.length}</h2>
            {
                posts.map((post, index)=> <Post key={index} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;