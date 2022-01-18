import "./App.css";
import React, { useState, useEffect } from "react";
import Bar from "./components/Bar";
function App() {
  const [array, setArray] = useState([8, 32, 7, 12, 6, 13, 9, 13, 25, 40]);
  const [store, setStore] = useState([]);

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
    setStore([i, j]);
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

  function SelectionSort(arr) {
    let array = [...arr];

    for (let i = 0; i < array.length - 1; i++) {
      setTimeout(() => {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[minIdx]) {
            minIdx = j;
          }
        }
        swap(array, i, minIdx);
        setArray([...array]);
      }, 500 * i);
    }
    setTimeout(() => {
      setStore([]);
    }, 500 * array.length);
  }

  function insertionSort(arr) {
    let array = [...arr];
    let i;
    for (i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      let ind = i;
      setTimeout(() => {
        while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
          setArray([...array]);
        }
        array[j + 1] = key;
        setStore([j + 1, ind]);
        setArray([...array]);
      }, 250 * (i * 2.5 + j));
    }
  }
  return (
    <div>
      <div className="App-Container">
        {array.map((item, index) =>
          index === store[1] || index === store[0] ? (
            <Bar value={item} key={index} color="#CE7BB0" />
          ) : (
            <Bar value={item} key={index} color="#570530" />
          )
        )}
      </div>
      <button
        onClick={() => {
          bubbleSort(array);
        }}
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          SelectionSort(array);
        }}
      >
        Selection Sort
      </button>
      <button
        onClick={() => {
          insertionSort(array);
        }}
      >
        Insertion Sort
      </button>
      <button onClick={generate}>generate</button>
    </div>
  );
}

export default App;
