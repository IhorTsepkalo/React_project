

function Post ({item, searsh}) {
    return (
        <div>
            <div>
                {item.id} - {item.name}  <button onClick={()=>searsh(item.id)}>Details</button>
            </div>
        </div>
    )
}

export default Post;