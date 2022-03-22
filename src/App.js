import "./App.scss";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
