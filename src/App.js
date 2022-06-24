//이 곳은 라우터가 들어갈 자리입니다.
//이곳에서 각 url에 대한 화면을 띄우는 작업을 수행합니다.
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/components/home/home";
import Notice from "./components/notice/Notice";
import Nav from "../src/components/nav";
import Detail from "./components/detail/Detail";
import Admin from "./admin/Admin";
import Create from "./admin/adminComponents/Create";
import Edit from "./admin/adminComponents/Edit";

function App() {
  return (
    <Router>
      <div className="contianer">
        <Nav />
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notice" element={<Notice />} />
          <Route exact path="/notice/:id" element={<Detail />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/edit" element={<Edit />} />
          <Route exact path="/admin/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
