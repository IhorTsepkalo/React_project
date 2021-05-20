import React, {useEffect, useState} from 'react';
import {getUsers} from "../../../services/api";
import Post from "./Post/Post";
import './Posts.css'

function Posts() {
    let [posts, setPosts] = useState([])
    let [details, setDetails] = useState(null)

    useEffect(() => {
        getUsers()
            .then(value => setPosts([...value.data]))
    }, [])
const search = (id) => {
        setDetails(posts.find(value => value.id === id))
}

    return (
        <div className={'wrap'}>
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value} searsh={search}/>)
                }
            </div>
            <div>
                {
                    details && <div>
                        <div><h3>{details.username}</h3> Address: {details.address.city} - {details.address.street}  </div>
                        <div>{<img src={'https://picsum.photos/150/150'} alt=""/>}</div>
                    </div>
                }
            </div>

        </div>
    );
}

export default Posts;