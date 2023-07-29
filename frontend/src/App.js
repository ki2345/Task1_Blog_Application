import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect } from "react";
import Header from './Components/Header';
import Auth from './Components/Auth';
import Blogs from './Components/Blogs';
import UserBlogs from './Components/UserBlogs';
import BlogDetail from './Components/BlogDetail';
import AddBlog from './Components/AddBlog';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from './Store';

function App() {
  const dispath = useDispatch();
  //grab the state of redux 
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
      if(localStorage.getItem("userId")){
          dispath(authActions.login());
      }
  },[dispath]);
  return <React.Fragment>
    <header>
      <Header />
    </header>

    <main>
      <Routes>
          { !isLoggedIn ? <Route path="/auth" element={<Auth/>}/> : 
          <>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/add" element={<AddBlog/>}/>
          <Route path="/myBlogs" element={<UserBlogs/>}/>
          <Route path="/myBlogs/:id" element={<BlogDetail/>}/> 
          </>
          } 
      </Routes>
    </main>


  </React.Fragment>
}

export default App;
