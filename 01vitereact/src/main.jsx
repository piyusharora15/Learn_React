import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// App is just a function so we can write it as a function here and even execute it. But it's not good for optimisation.
// Behind the scenes, vite uses a transpiler(Babel) that converts HTML into jsx which is understood by react.
// When we create a component in react by default babel(Transpiler) will inject a element React.createElement()

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
