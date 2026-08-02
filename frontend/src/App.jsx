import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard-content">
          Hello Dashboard
        </div>

      </div>

    </div>
  );
}

export default App;