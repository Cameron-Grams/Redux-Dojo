import { combineReducer } from 'redux'; 

import { 
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters } from './actions/actions';

const { SHOW_ALL } = VisibilityFilters; 

function todos( state = [], action ){
    switch( action.type ){
        case ADD_TODO:
          return [ ...state, {
                text: action.text,
                completed: false
             } ];  
        case TOGGLE_TODO:
          return state.map( ( todo, index ) => {
              if ( index === action.index ){
                Object.assign( {}, todo, {
                    completed: !todo.completed
                })
              }
              return todo;
          });
        default:
          return state;
    }
}

function visibilityFilter( state = SHOW_ALL, action ){
    switch( action.type ){
        case SET_VISIBILITY_FILTER:
          return Object.assign( {}, state, {
              visibilityFilter: action.filter 
          })
        default:
          return state;
    }
}


function todoApp( state = { }, action ){
    return {
        visibilityFilter: visibilityFilter( state.visibilityFilter, action ),
        todos: todos( state.todos, action )
    }
};

export default todoApp; 

/* Equivalent:
function reducer = combineReducer( {
    visibilityFilter: visibilityFilter,
    todos: todos
})
- each key value pair called with the value as a property of state



/*  can be simplified to the above...
function todoApp(state - initialState, action) {
  switch( action.type ){
      case SET_VISIBILITY_FILTER:
        return Object.assign( {}, state, visibilityFilter( state.visibilityFilter, action ) ); 

      case ADD_TODO:
        return Object.assign( {}, state, todos( state.todos, action ) );

      case TOGGLE_TODO:
        return Object.assign( {}, state, todos( state.todos, action ) ); 

      default:
        return state;
    }
}

/// initialState is also abstracted out by having the sub-reducers provide the default values 
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
  };


*/


