import "./App.scss";
import { ProjectComponent } from "./pages/comp/ProjectComponent";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ProjectComponent />
    </div>
  );
}

export default App;
