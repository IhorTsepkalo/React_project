import {useEffect, useState} from "react";
import User from "./User/User";
import './Users.css'

export default function Users() {
    let [users, setUsers] = useState([])
    let [choosenUser, setChoosenUser] = useState(null)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            })
    }, [])

    const chooseUser = (id) => {
        setChoosenUser(users.find(value => value.id === id))
    }

    return (
        <div className={'wrap'}>
            <div>
                {
                    users.map(value => <User key={value.id} item={value} chooseUser={chooseUser}/>)
                }
            </div>
            <div className={'userDet'}>
                {
                    choosenUser && <div> {choosenUser.id} - {choosenUser.email}</div>
                }
            </div>
        </div>
    )
}