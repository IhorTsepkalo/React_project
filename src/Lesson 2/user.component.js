export default function User(props) {
    let {age, name, isMarried} = props;
    return (
        <div>
            <div>{'-------------------------'}</div>
            <h2>{name}</h2>
            <h4>{age} {isMarried.toString()}</h4>
            <div>{'-------------------------'}</div>
        </div>

    )
}