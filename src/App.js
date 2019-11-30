import React from 'react';
import './App.css';
import { observer, useObservable } from 'mobx-react-lite'

const App = observer(() => {

  const store = useObservable({
    count: 1,
    addOne() {
      store.count ++;
    },
    subtractOne() {
      store.count --;
    }
  });

  function addOneHandle() {
    store.addOne();
  }

  function subtractOneHandle() {
    store.subtractOne();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {store.count}</h1>
        <button onClick={addOneHandle}>Add One</button>
        <button onClick={subtractOneHandle}>Subtract One</button>
      </header>
    </div>
  );
});

export default App;
