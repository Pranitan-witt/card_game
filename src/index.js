import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Result';
const main_colors = ["Red", "Blue", "Green", "Brown"];
const main_colors_code = ["#FF0000", "#0080FF", "#00FF00", "#ab0000"];
const rootElement = document.getElementById('root');
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/mainpage" component={Main} />
        <Route path="/result" component={Result} />
      </Switch>
      </BrowserRouter>,
      rootElement
  
);
export {main_colors, main_colors_code};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
