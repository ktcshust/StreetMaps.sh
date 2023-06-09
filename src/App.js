import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Search from "./Search";
import Study from "./Study";
import Newsfeed from "./Newsfeed";
// Import các component tương ứng với các file Age khác

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/study" element={<Study />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          {/* Thêm các Route tương ứng với các file Age khác */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


