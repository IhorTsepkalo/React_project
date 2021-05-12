import User from "./Lesson 2/user.component";
import {useState} from "react";

let usersList = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];



function App() {

let [users, setUsers] = useState(usersList);



    const deleteUser = () => {
        users.pop();
        setUsers([...users])
        console.log(users);
    }


    let [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);
    const decrement = () => setCounter(--counter);
    const reset = () => setCounter(0);

    return (
        <div>
            <div>
                counter is {counter}
                <div>
                    <button onClick={increment}>increment</button>
                </div>

                <div>
                    <button onClick={decrement}>decrement</button>
                </div>
                <div>
                    <button onClick={reset}>reset</button>
                </div>
            </div>
            <div>
                {
                    users.map((value, index) =>
                        <User key={index}
                              {...value}
                        />
                    )
                }

                <button onClick={deleteUser}> delete user</button>
            </div>
        </div>
    );
}

export default App;
