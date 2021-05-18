

function Post ({item, searsh}) {
    return (
        <div>
            <div>
                {item.id} <button onClick={()=>searsh(item.id)}>Details</button>
            </div>
        </div>
    )
}

export default Post;