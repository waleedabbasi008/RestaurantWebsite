import React from "react";
import ReactDom from 'react-dom';
// import PortfolioApp from './PortfolioApp';
import {BrowserRouter} from 'react-router-dom';
// import WeatherApp from './WeatherApp';
// import ReactDom from 'react-dom'
// import App from './RecipeApp/App';
// import App from './App';
// import CalculatorApp from './CalculatorApp';
// import PomodoroApp from './PomodoroApp';
import ReduxApp from './ReduxApp';
ReactDom.render(
  <>
  <BrowserRouter>
     <ReduxApp />
 </BrowserRouter>
  </>,
   document.getElementById("root")
);
