import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "remixicon/fonts/remixicon.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import { Store } from "./App/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
