import './App.css';
import CharactersComponents from "./components/characters/characters.components";

function App() {
    return (
        <div className={'main'}>
            <CharactersComponents
                description={'bart'}
                image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
            <CharactersComponents
                description={'lisa'}
                image={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
            <CharactersComponents
                description={'homer'}
                image={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        </div>
    );
}

export default App;
