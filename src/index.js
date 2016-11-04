import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const allProducts = [
    { title: 'Lapis', price: 1 },
    { title: 'Caneta', price: 3 },
    { title: 'Cola', price: 5 },
    { title: 'Caderno', price: 10 },
    { title: 'Tesoura', price: 15 },
    { title: 'Livro', price: 100 },
    { title: 'Mochila', price: 200 },
    { title: 'Notebook', price: 1000 }
];

ReactDOM.render(
  <App allProducts={allProducts} />,
  document.getElementById('root')
);
