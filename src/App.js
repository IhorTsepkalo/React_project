import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/Users/Users";


export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}> Users </Link></div>
                <h1></h1>
                <div><Link to={'posts'}> Posts </Link></div>

                <Switch>
                    <Route path={'/users'} render={() => <Users/>}/>
                    <Route path={'/posts'} render={() => <h1>Posts</h1>}/>
                </Switch>
            </div>
        </Router>
    )
}
