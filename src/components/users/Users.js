import {useEffect, useState} from "react";
import User from "./user/User";
import './User.css';

export default function Users() {
    let [users, setUsers] = useState([]);
    let [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {setUsers([...value])
            })
    }, [])

    const search = (id) => {
        let singleUserDetails = users.find(value => value.id === id)
        setUserDetails(singleUserDetails)
    }

    return (
        <div className={'wrap'}>
            <div className={'usersBox'}>
                {
                    users.map(value => <User key={value.id} item={value} search={search}/>)
                }
            </div>
            <div>
                {
                    userDetails && <div className={'singleUserBox'}>
                        <h2> {userDetails.id} {userDetails.name}</h2>
                        <div> Username: {userDetails.username}</div>
                        <div> Email: {userDetails.email}</div>
                        <div> Phone: {userDetails.phone}</div>
                        <div> Website: {userDetails.website}</div>
                        <div> City: {userDetails.address.city}</div>
                        <div> Street: {userDetails.address.street}</div>
                        <div> Zipcode: {userDetails.address.zipcode}</div>
                        <div>-----</div>
                        <div> Company: {userDetails.company.name}</div>
                    </div>
                }
            </div>
        </div>
    )
}