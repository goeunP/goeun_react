import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="page-top">
      <div class="topbar-wrapper">
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
      </div>
      <div id="wrapper">
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
              <Link to="/admin">ADMIN</Link>
            </div>
          </a>

          <hr class="sidebar-divider my-0" />

          <li class="nav-item active">
            <li class="nav-link">
              <span>
                <Link to="/">멋사 공지 게시판</Link>
              </span>
            </li>
          </li>

          <hr class="sidebar-divider" />

          <div class="sidebar-heading">글 관리</div>

          <li class="nav-item">
            <li
              class="nav-link collapsed"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i class="fas fa-fw fa-folder"></i>
              <span>
                <Link to="/admin/create/">Create</Link>
              </span>
            </li>
            <div
              id="collapsePages"
              class="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            ></div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i class="fas fa-fw fa-folder"></i>
              <span>
                <Link to="/admin/edit/">Edit</Link>
              </span>
            </a>
            <div
              id="collapsePages"
              class="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            ></div>
          </li>

          <hr class="sidebar-divider d-none d-md-block" />
        </ul>
      </div>
    </div>
  );
}

function Topbar() {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
    </div>
  );
}

function Content() {
  return <div>edit 페이지 입니다</div>;
}

function Footer() {
  return (
    <div>
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Edit() {
  return (
    <div>
      <Sidebar />

      <Content />
      <Footer />
    </div>
  );
}

export default Edit;
