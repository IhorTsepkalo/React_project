import './PostStyle.css'

export default function Post({item, searsh}) {
    return (
        <div>
            <h3>{item.id} - {item.title}</h3>
            <button onClick={()=>searsh(item.id)} >Details</button>
        </div>
    )
}