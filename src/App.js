import React from 'react'
import { hot } from 'react-hot-loader'
import './style.css'

// dynamically load this component when we need it
const Warning = React.lazy(() => import('./components/Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  UNSAFE_componentWillMount() {
    // console.log('hello')
  }

  render() {
    // throw new Error('Boom!')
    const count = this.state.count
    return (
      <div>
        <h1>Hello World.</h1>
        <img alt="logo" src="lg.png" />
        <p>
          {count}{' '}
          {count > 10 ? (
            <React.Suspense fallback={null}>
              <Warning />
            </React.Suspense>
          ) : null}
        </p>
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
      </div>
    )
  }
}
export default hot(module)(App)
