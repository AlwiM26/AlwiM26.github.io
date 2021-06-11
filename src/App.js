import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projectDetail/:name" exact component={ProjectDetail} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
