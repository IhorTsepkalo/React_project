export default function User({item, chooseUser}) {
    return (
        <div>

            <div>
                {item.username}
            </div>
            <img src={'https://picsum.photos/200/300'} alt=""/>
            <div>
                <button onClick={()=> chooseUser(item.id)}>Details</button>
            </div>
            <h1></h1>
        </div>
    )
}
