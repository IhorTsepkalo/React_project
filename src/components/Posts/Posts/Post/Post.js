import {Link} from "react-router-dom";

function Post ({item, url}) {
    return (
        <div>
            <div>
                {item.id} - {item.title}-<Link to={url + '/' + item.id}> details </Link>
            </div>
        </div>
    )
}

export default Post;