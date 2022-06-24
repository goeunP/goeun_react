//기본 html과 React가 직접적으로 소통하는 공간입니다.
//이 파일을 굳이 건들지 않아도 다른 파일을 작업함으로써 원하는 디자인을 만들 수 있습니다.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
