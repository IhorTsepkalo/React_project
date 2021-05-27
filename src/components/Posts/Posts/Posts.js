import React, {useEffect, useState} from 'react';
import {getPosts} from "../../../services/api";
import Post from "./Post/Post";
import './Posts.css'
import PostDetails from "./Post/PostDetails/PostDetails";

function Posts({url}) {
    let [posts, setPosts] = useState([])


    useEffect(() => {
        getPosts()
            .then(value => setPosts([...value.data]))
    }, [])


    return (
        <div className={'wrap'}>
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value} url={url}/>)

                }
            </div>


        </div>
    );
}

export default Posts;