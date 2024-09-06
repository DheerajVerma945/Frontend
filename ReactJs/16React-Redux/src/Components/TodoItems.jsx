import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delTodo, updateTodo } from '../Features/toDOSlice';

function TodoItems() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null); // Track which to-do is being edited
    const [newText, setNewText] = useState(''); // Track new text for the to-do being edited

    const handleEditClick = (todo) => {
        setEditId(todo.id); // Set the current to-do item to edit
        setNewText(todo.text); // Set the current text in the input box
    };

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, text: newText }));
        setEditId(null); // Exit edit mode after updating
        setNewText(''); // Clear input
    };

    return (
        <>
            
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                    className="bg-gray-800 text-white px-2 py-1 rounded"
                                />
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12l7.5-7.5m0 0L19.5 12m-7.5-7.5V21"
                                        />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className='text-white'>{todo.text}</div>
                                <button
                                    onClick={() => handleEditClick(todo)}
                                    className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 13.5l-3 3m0 0l3 3m-3-3h12m0 0l3-3m0 0l-3-3M6 13.5l3-3m0 0l-3-3"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => dispatch(delTodo(todo.id))}
                                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoItems;
