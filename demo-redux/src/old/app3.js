import React from 'react';
// import { createStore } from 'redux';

import './App.css';


// reducer
const counter = ( state = 0, action ) => {
  switch ( action.type ){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// create the store as a function of the library 
const createStore = ( reducer ) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = ( action ) => {
    state = reducer( state, action );
    
//notify change listeners to change in state by calling them
    listeners.forEach( listener => listener() );
  };
  
  const subscribe = ( listener ) => {
    listeners.push( listener );
// removes the  old listener from the listeners array 
    return () => {
      listeners = listeners.filter( l => l !== listener );
    };
  };

// returns the initial value of state
  dispatch( {} );

  return { getState, dispatch, subscribe };

};

// this is the lbirary call from examples
const store = createStore( counter );

const Wrapper = ( ) => {
  return( <div></div>)
};



// this is a unique instance of render drafted for the example 
// this is a bad implementation since it changes the state, value, as a side effect, the return is not used... 
const render = () => {
  const newState = store.getState();
  document.getElementById( 'root' ).innerText = newState;
  return(<Wrapper /> )
};

// document.body.innerText = store.getState();

store.subscribe( render );
render();

document.addEventListener( 'click', () => {
  store.dispatch( {type: 'INCREMENT' } );
} );

export default render;  

// Bad use of side effects 
