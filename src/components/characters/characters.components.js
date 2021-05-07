import './characters.components.css'

function CharactersComponents(props) {

    let cls = '';
    if (props.description === 'bart') {
        cls = 'bart'
    }
    else if (props.description === 'lisa') {
        cls = 'lisa'
    }
    else if (props.description === 'homer') {
        cls = 'homer'
    }
    return     <div className={cls}>
            <h2>
                {props.description}
            </h2>
            <img src={props.image}/>
        </div>
   }
export default CharactersComponents;