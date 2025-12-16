import { useState } from "react";
import Button from "../components/button";

function Index() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Contador: {count}</p>
            <Button text="Clique aqui" onClick={() => setCount(count + 1)} />
        </div>
    );
}

export default Index;
