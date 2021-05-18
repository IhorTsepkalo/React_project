import './UserStyle.css'

export default function User({item, search}) {
    return (
        <div className={'mainUserslist'}>
            <div onMouseOver={() => search(item.id)}>
                <h3>{item.id} - {item.name}</h3>
            </div>

        </div>
    )
}