import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { Route, Routes } from "react-router-dom";
import ArticleView from "./screens/ArticlesView/ArticleView";
import ShowArticles from "./screens/ShowArticles/ShowArticles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/articles/:title" element={<ArticleView/>}/>
        <Route path="/showarticles" element={<ShowArticles/>}/>
      </Routes>
    </div>
  );
}

export default App;
