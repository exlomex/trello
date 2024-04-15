import { memo, useState } from 'react';

export const One = memo(() => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        setCounter((prev) => prev + 1);
    };
    return (
        <div>
            <button onClick={increment}>увеличить</button>

            <p>текущий = {counter}</p>

            <div>
                <h1>13131</h1>
                <h1>13131</h1>
                <h1>13131</h1>
                <h1>13131</h1>
            </div>
        </div>
    );
});
