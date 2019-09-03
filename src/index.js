import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBoundary from './components/DefaultErrorBoundary'
import store from './store/index'
import addArticle from './actions/index'
import { Provider } from 'react-redux'

window.store = store
window.addArticle = addArticle

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
