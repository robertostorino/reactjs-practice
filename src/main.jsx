import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css';
import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const container = document.getElementById('root');

ReactDOM.render(<App />, container);