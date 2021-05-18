import './PostsStyle.css'
import {useEffect, useState} from "react";
import Post from "./posts/post/Post";


export default function Posts() {
    let [posts, setPosts] = useState([])
    let [det, setDet] = useState(null)

    const searsh = (id) => {
        let found = posts.find(value => value.id === id)
       setDet(found)
    }

       useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json()
                .then(value => {
                    setPosts([...value])
                }))
    }, [])


    return (
        <div className={'wrap'}>
            <div className={'title'}>
                {
                    posts.map(value => <Post key={value.id} item={value} searsh={searsh}/>)
                }
            </div>
            <div>
                {
                    det && <h2>{det.body}</h2>
                }
            </div>
        </div>
    )
}