import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";

import './App.css';

function App() {

  return (
        <Dashboard>
          <Header/>
          <AddTask/>
          <ListTask/>
          <Footer/>
        </Dashboard>
  );
}

export default App;
