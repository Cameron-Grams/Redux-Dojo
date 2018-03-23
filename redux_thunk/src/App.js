import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import { Provider } from 'react-redux'; 

import configureStore from './store/configureStore';

const store = configureStore();  //optionally include the initial state here...

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
      <div className="App outer">
      <div className="shell">
       <ItemList />  
       </div>
      </div>
      </Provider >
    );
  }
}

export default App;
