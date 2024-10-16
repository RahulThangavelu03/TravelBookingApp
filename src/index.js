import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "./Store";
import { Provider } from "react-redux"




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <React.StrictMode>
    <Provider store={store}>

      <App />

    </Provider >
  </React.StrictMode>
);
