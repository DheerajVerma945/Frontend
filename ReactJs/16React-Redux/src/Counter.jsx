import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { customDecrement, customIncrement, decrement, increment } from './Features/counterSlice';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);
    const [customIncre, setCustomIncre] = useState(0);
    const [customDecre, setCustomDecre] = useState(0);
    const handleMIncrement = () => {
        dispatch(customIncrement(customIncre))
        setCustomIncre(0);
    }
    const handleMDecrement = () => {
        dispatch(customDecrement(customDecre))
        setCustomDecre(0);
    }

    return (
        <div className='flex flex-col gap-2 justify-center items-center '>
            <h1 className='text-center p-4 text-3xl'>Counter :{count}</h1>
            <button className=' bg-blue-400 p-3 text-xl font-mono rounded-md hover:p-4' onClick={() => dispatch(increment())}>Increment</button>
            <button className=' bg-blue-400 p-3 text-xl font-mono rounded-md hover:p-4' onClick={() => dispatch(decrement())}>Decrement</button>



            <label className='text-center text-xl'>Increment manually</label>
            <input type="number" value={customIncre} className='border border-gray-400 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) => {
                setCustomIncre(parseInt(e.target.value, 10))
            }} />

            <button disabled={customIncre === 0} className=' bg-blue-400 p-3 text-xl font-mono rounded-md hover:p-4' onClick={handleMIncrement}>Increment M</button>


            <label className='text-center text-xl'>Decrement manually</label>
            <input type="number" value={customDecre} className='border border-gray-400 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) => {
                setCustomDecre(parseInt(e.target.value, 10));
            }} />
            <button disabled={customDecre === 0} className=' bg-blue-400 p-3 text-xl font-mono rounded-md hover:p-4' onClick={handleMDecrement}>Decrement M</button>

        </div>
    )
}

export default Counter
