import { useState } from 'react'
import './App.css'
import Header from './components/Header'

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const flashcards = [
    {
        "title": "Array",
        "description": "In an array, elements in memory are arranged in continuous memory. All the elements of an array are of the same type. And, the type of elements that can be stored in the form of arrays is determined by the programming language. (List in Python)"
    },
    {
        "title": "Tuple",
        "description": "Tuples are the same as lists are with the exception that the data once entered into the tuple cannot be changed no matter what. The only exception is when the data inside the tuple is mutable, only then the tuple data can be changed. "
    },
    {
        "title": "Stack",
        "description": "In stack data structure, elements are stored in the LIFO principle. That is, the last element stored in a stack will be removed first."
    },
    {
        "title": "Queue",
        "description": "Unlike stack, the queue data structure works in the FIFO principle where first element stored in the queue will be removed first."
    },
    {
        "title": "String",
        "description": "String is a collection of alphabets, words or other characters. "
    },
    {
        "title": "Hashmap",
        "description": "Hash maps are a common data structure used to store key-value pairs for efficient retrieval. A value stored in a hash map is retrieved using the key under which it was stored. (Dictionary in Python)"
    },
    {
        "title": "Set",
        "description": "Sets are a collection of unordered elements that are unique. It is a collection which is unordered, unchangeable*, and unindexed."
    },
    {
        "title": "Linked List",
        "description": "In linked list data structure, data elements are connected through a series of nodes. And, each node contains the data items and address to the next node."
    },
    {
        "title": "Tree",
        "description": "Similar to a graph, a tree is also a collection of vertices and edges. However, in tree data structure, there can only be one edge between two vertices."
    },
    {
        "title": "Graph",
        "description": "In graph data structure, each node is called vertex and each vertex is connected to other vertices through edges."
    },
    {
      "title": "End",
    }
  ]

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  function increaseIndex() {
    setIndex(() => {
      return index + 1;
    });
    setFlipped(!flipped);
  }

  function decreaseIndex() {
    setIndex(() => {
      return index - 1;
    });
    setFlipped(!flipped);
  }

  function resetIndex(){
    setIndex( () => {
      return 0;
    })
  }

  return (
    <div className="App">
        <Header />

        <div>
            <div className={`indexCard-container ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
                <div className="frontCard">
                    <h1>{flashcards[index].title}</h1>
                </div>
                
                <div className="backCard">
                    <h2>{flashcards[index].description}</h2>
                </div>
            </div>
        </div>

        <div className="traverse">
                <button className={index == 0 ? "back hidden" : "back"}
                    onClick={index == 0 ? "" : decreaseIndex}>
                        Prev
                </button>
                {index == flashcards.length - 1 ? (
                <button onClick={resetIndex}>Restart</button>
                ) : (
                <button onClick={increaseIndex}>Next</button>
                )}
        </div>
        
    </div>
  )
}

export default App