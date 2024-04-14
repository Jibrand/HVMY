import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./Pages/Home/index";
import Contact from "./Pages/Contact";
import Allblogs from "./Pages/Blogs/Allblogs";
import SingleBlog from './Pages/Blogs/SingleBlog'
import Login from "./Pages/Login";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import TC from './Pages/T&C'

// Lazy loading components
// const Index = React.lazy(() => import("./Pages/Dashboard"));
// const Reviews = React.lazy(() => import('./Pages/Dashboard/Reviews'));
// const Spotify = React.lazy(() => import('./Pages/Dashboard/Spotify'));
// const Youtube = React.lazy(() => import('./Pages/Dashboard/Youtube'));
// const Team = React.lazy(() => import('./Pages/Dashboard/Team'));
// const Blog = React.lazy(() => import('./Pages/Dashboard/Blogs'));
// const NewBlog = React.lazy(() => import('./Pages/Dashboard/NewBlog'));
// const UpdateBlog = React.lazy(() => import('./Pages/Dashboard/UpdateBlog'));
// const Forget1 = React.lazy(() => import('./Forget1'));
// const Forget2 = React.lazy(() => import("./Forget2"));

import './App.css'

function App() {

  return (
  <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/admin/dashboard" element={<Index />} /> */}
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/allblogs" element={<Allblogs />} />
            {/* <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Spotify" element={<Spotify />} />
            <Route path="/Vodcast" element={<Youtube />} /> */}
            {/* <Route path="/Team" element={<Team />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/NewBlog" element={<NewBlog />} />
            <Route path="/UpdateBlog/:id" element={<UpdateBlog />} /> */}
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="/ResetPasswordemail" element={<Forget1 />} />
            <Route path="/reset-new-password/:id/:token" element={<Forget2 />} /> */}
            <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy />} />
            <Route path="/T&C" element={<TC />} />
          </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
