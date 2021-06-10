import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projectDetail/" exact component={ProjectDetail} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
