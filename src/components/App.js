import { Routes, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcom to Re-30-Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
