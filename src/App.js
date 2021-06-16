import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projectDetail" component={ProjectDetail} />
        <Route path="*" exact component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
