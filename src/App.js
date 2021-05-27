import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts/Posts";
import UserDets from "./components/Users/User/UserDets/UserDets";
import PostDetails from "./components/Posts/Posts/Post/PostDetails/PostDetails";


export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}> Users </Link></div>

                <div><Link to={'posts'}> Posts </Link></div>

                <Switch>
                    <Route exact={true} path={'/users'} render={(props) => <Users {...props}/>}/>
                    <Route exact={true} path={'/users/:id'} render={(props) => {
                        let {match: {params: {id}}} = props
                        return <UserDets userId={id}/>
                    }}/>

                    <Route exact={true} path={'/posts'} render={({match:{url}}) => <Posts url={url}/>}/>
                    <Route exact={true} path={'/posts/:id'} render={(props) =>{
                        let {match: {params: {id}}} = props
                        return <PostDetails postId={id}/>
                    }}/>

                </Switch>
            </div>
        </Router>
    )
}
