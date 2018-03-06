import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from '../Dashboard';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard name="React" />,
    document.getElementById('root')
  );
});
