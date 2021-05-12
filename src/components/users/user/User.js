export default function User({item}) {
    return (
        <div>
            <h2> {item.id} - {item.name}</h2>
            <div>
                <h5>Age - {item.age}</h5>
                <h4> Address:</h4>
                City - {item.address.city}
                <br/>
                Street - {item.address.street}
                <br/>
                House - {item.address.number}
                <br/>
                <h6>-----------</h6>
            </div>

        </div>
    )
}