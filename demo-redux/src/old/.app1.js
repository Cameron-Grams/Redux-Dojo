import React, { Component } from 'react';
import './App.css';


//  reducer function reads the actions and modifies the state accordingly  
const counter = ( state = 0, action ) => {
  switch ( action.type ){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// functions that form the basis of Redux  
const createStore = ( reducer ) => {
  let state;
  let listeners = [];

// function to return state    
  const getState = () => state;

// function to enact an action in state
  const dispatch = ( action ) => {
    state = reducer( state, action );
    // udpates all the active listeners to change in state
    listeners.forEach( listener => listener() );  
  }    

// determines which function influences state    
  const subscribe = ( listener ) => {
    listeners.push( listener );
    // removes all but the current listener
    return () => {
      listeners = listeners.filter( l => l !== listener );
    }
  }

// initial call to render state when the createStore function is created     
  dispatch( { } ); 

// returns the API from the createStore function 
  return { getState, dispatch, subscribe };
}

// initializes the createStore API under the store variable   
const store = createStore( counter );



document.addEventListener( 'click', () => {
  console.log( ' body click recogized...', store.getState() ); 
  store.dispatch( { type: 'INCREMENT' } );
  render2();
} );


// ------------------------
const render2 = () => {
  document.getElementById( "output" ).innerText = store.getState();
};

store.subscribe( render2 );
// render2();





//  ================== original React =============
class App extends Component {

  render() {
    return (  <div id="wrapper"><div id="output">Start Counting!</div></div> );
  }
}
 
export default App;
