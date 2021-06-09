import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'
import Card from './components/Card';

let count = 0;
setInterval(function(){
  console.log(count);
  let first = count % 10;
  let second  = Math.floor(count / 10) % 10;
  let third = Math.floor(count / 100) % 10;
  let fourth = Math.floor(count / 1000) % 10;
  let fifth = Math.floor(count / 10000) % 10;
  let sixth = Math.floor(count / 100000) % 10;
  count++;
ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="row d-flex justify-content-between">
        <Card col="col-2" inner={<i className="far fa-clock"></i>} />
        <Card col="col-1" inner={sixth}/>
        <Card col="col-1" inner={fifth}/>
        <Card col="col-1" inner={fourth}/>
        <Card col="col-1" inner={third}/>
        <Card col="col-1" inner={second}/>
        <Card col="col-1" inner={first}/>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')

);
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
