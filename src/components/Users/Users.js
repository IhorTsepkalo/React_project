import {useEffect, useState} from "react";
import User from "./User/User";
import './Users.css'

export default function Users( {match:{url}}) {

    let [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])



    return (
        <div className={'wrap'}>
            <div>
                {
                    users.map(value => <User key={value.id} item={value} url={url}/>)
                }
            </div>

        </div>
    )
}