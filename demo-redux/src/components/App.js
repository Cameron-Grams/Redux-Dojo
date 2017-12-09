import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import './App.css';

const App = () => (
  <div id="outerWrapper">
  <div id="innerWrapper">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  </div>
)

export default App