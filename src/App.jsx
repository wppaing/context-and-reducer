import "./index.css";
import Home from "./components/home/home";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1>This is App component</h1>

        {/* <button
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          Change
        </button> */}

        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
