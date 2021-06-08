import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      {/* <ProjectDetail /> */}
      <Footer />
    </div>
  );
}

export default App;
