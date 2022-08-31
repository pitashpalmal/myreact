import Clock from './Clock';

function ClockList({quantities = []}) {
    return (
        <div>
            {quantities.map((key) => (<Clock key={Math.random()} />))}
        </div>    
    );
}

export default ClockList;