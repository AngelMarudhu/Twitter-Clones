import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
