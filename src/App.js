import "./App.css";
import React, { useState, useEffect } from "react";
import Bar from "./components/Bar";
function App() {
  const [array, setArray] = useState([8, 32, 7, 12, 6, 13]);

  const generate = () => {
    let sample = [];
    for (let i = 0; i < 15; i++) {
      sample.push(Math.floor(Math.random() * 50) + 1);
    }
    setArray(sample);
    return sample;
  };

  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    return array;
  };

  const bubbleSort = (arr) => {
    let array = [...arr];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        setTimeout(() => {
          if (array[j] > array[j + 1]) {
            swap(array, j, j + 1);
            setArray([...array]);
            console.log(array);
          }
        }, 250 * (i * 2.5 + j));
      }
    }
  };

  return (
    <div>
      <div className="App-Container">
        {/* {setArray(Array)} */}
        {array.map((item) => (
          <Bar value={item} />
        ))}
      </div>
      <button
        onClick={() => {
          bubbleSort(array);
        }}
      >
        Sort
      </button>
      <button onClick={generate}>generate</button>
    </div>
  );
}

export default App;
