import React from 'react'
import AddToDo from './Components/AddToDo'
import TodoItems from './Components/TodoItems'
import { Provider } from 'react-redux'
// import { store } from './App/store'
import { store } from './App/store2'
import Counter from './Counter'


/*
<h1 className='text-center text-xl p-4 text-orange-600  font-bold shadow-lg'>Manage your To-Do's</h1>
<AddToDo />
<TodoItems />
*/

function App() {


  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
