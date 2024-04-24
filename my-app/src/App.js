import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear()   // declarative
  const newContainer = React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
      React.createElement('p', null, `Edit`, React.createElement('code', null, 'src/App.js'), `and save to reload.`),
      React.createElement('a', { className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' }, 'Learn React'),
      React.createElement('p', null, 'Current Year: ', currentYear)
    )
  )

  return newContainer
}
export default App
