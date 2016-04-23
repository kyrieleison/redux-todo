import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/AppReducers'
import { addTodo } from './actions/TodoActions'
import App from './components/App'

let store = createStore(todoApp)

store.dispatch(addTodo('Hello React!'))
store.dispatch(addTodo('Hello Redux!'))

console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
