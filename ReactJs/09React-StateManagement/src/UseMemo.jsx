import React, {  useMemo, useState } from 'react'

const Component1 = () => {
    function calculation () {
        let sum = 0;
        for (let i = 0; i <= 999999999; i++) {
            sum++;
        }
        return sum;
    }
    const res = useMemo( ()=>calculation(),[])
    return <p>Sum:{res}</p>

}

function UseMemo() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Component1 />
            <h1>Counter:{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increase</button>
        </div>
    )
}

export default UseMemo
