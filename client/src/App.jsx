import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Signup } from "./pages/signup";
import { Publish } from "./pages/publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />}></Route>
          <Route path="" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
