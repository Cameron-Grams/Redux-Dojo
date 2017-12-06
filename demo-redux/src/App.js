import React from 'react';
import { createStore } from 'redux';

import './App.css';


//  reducer function reads the actions and modifies the state accordingly  
const counter = ( state = 0, action ) => {
  switch ( action.type ){
    case 'INCREMENT':
      console.log( 'increment reducer' );
      return state + 1;
    case 'DECREMENT':
      console.log( 'decrement reducer' );
      return state - 1;
    default:
      return state;
  }
};

const Counter = ( {
  value, 
  onIncrement,
  onDecrement
}) => (
  <div id="wrapper"><div id="output">
    <h1>{ value }</h1>
    <button onClick={ onIncrement } > + </button>
    <button onClick={ onDecrement } > - </button>
  </div></div>  
);


// creaateStore from the Redux library 
// initializes the createStore API under the store variable   
const store = createStore( counter );
store.subscribe( App );

export default function App(){

    return ( 
      <Counter
        value={ store.getState() }
        onIncrement = { () => {
          store.dispatch( {
            type: 'INCREMENT'
          } )
          console.log( store.getState() );
        } }
        onDecrement = { () => {
          console.log( store.getState() );
          store.dispatch( {
            type: 'DECREMENT'
          } )
        } }
        />
    );
};



