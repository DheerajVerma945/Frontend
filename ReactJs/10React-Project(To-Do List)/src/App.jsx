import { useState } from 'react'
import './App.css'
import Heading from '../Components/Heading';
import Item from '../Components/Items';
import Footer from '../Components/Footer';
import InputArea from '../Components/InputArea';




function App() {

  const [arr, setArr] = useState([]);

  function addItem(inputText) {
    if (inputText.trim()) {
      setArr((prevArr) => [...prevArr, inputText]);
    }
  }
  function deleteItem(id) {
    setArr((prevArr) => {
      return prevArr.filter((item, index) => {
        return id !== index;
      })
    })
  }

  const currYear = new Date().getFullYear();

  return (
    <>
      <div className="container">
        <Heading />
        <div className="form">
          <InputArea onClick={addItem} />
        </div>
        <div>
          <ul>
            {arr.map((it, index) => (
              <Item
                it={it}
                key={index}
                id={index}
                onClick={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <Footer year={currYear} />
      </div>
    </>
  )
}

export default App
