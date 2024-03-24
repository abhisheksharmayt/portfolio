import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/Home.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import Work from "./components/videos/Work.tsx";
import About from "./components/about/About.tsx";
import Videos from "./components/videos/Videos.tsx";
import Error from "./components/Error.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Social from "./components/social/social.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Navbar />
          <Social />
        </>
      }
    >
      <Route index element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="videos/:id" element={<Work />} />
      <Route path="about" element={<About />} />
      <Route path="videos" element={<Videos />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);
