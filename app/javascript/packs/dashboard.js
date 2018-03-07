import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../Dashboard';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root');
  const data = JSON.parse(node.getAttribute('data'));
  ReactDOM.render(<Dashboard {...data} />, node);
});
