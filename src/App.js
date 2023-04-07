import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import List from "./page/List";
import ListItem from "./page/ListItem";
import Write from "./page/Write"
import './App.css';
import img from './github.png'

function App() {
  return (
    <div className="App">
      <Link to="/blog">
        <div className="navbar">
          <h2>블로그</h2>
        </div></Link>
      <Link to="/write">
        <div className="write">
          <h4>글작성</h4>
        </div></Link>
      <a href="https://github.com/wodnjs7800/blog" target="_blank"><img src={img} /></a>



      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/blog" element={<List />} />
        <Route path="/write" element={<Write />} />
        <Route path="/item/:id" element={<ListItem />} />
      </Routes>
    </div>
  )
}

export default App;
