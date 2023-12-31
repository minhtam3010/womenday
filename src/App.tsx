import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimateScroll from "./AnimateScroll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<AnimateScroll />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/loading" element={<Loading />} /> */}
        {/* <Route path="/animate" element={<AnimateScroll />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
