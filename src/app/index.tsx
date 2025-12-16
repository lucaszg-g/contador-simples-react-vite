import './styles.css';
import { useState } from "react";
import Button from "../components/button";

function Index() {
    const [count, setCount] = useState(0);
    
    return (
        <div className='container'>
            <p id='counter'>Contador: {count}</p>
            <div className="button-group">
            <Button text="Incrementar" className="btn full-width primary" onClick={() => setCount(count + 1)} />
            <Button text="Decrementar" className="btn full-width secondary" onClick={() => setCount(count - 1)} />
            <Button text="Resetar" className="btn full-width danger" onClick={() => setCount(0)} />
            </div>
        </div>
    );
}

export default Index;
