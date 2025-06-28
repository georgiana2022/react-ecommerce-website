import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "./components/Authentication/Registration/Registration";
import { Login } from "./components/Authentication/Login/Login";
import { Home } from './components/Home/Home';
import { AdminProduct } from "./components/AdminProduct/AdminProduct";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/admin/product" element={<AdminProduct/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}