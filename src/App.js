import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from './Widgets'

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Middle Feed */}
      <Feed/>

      {/* Right Side Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
