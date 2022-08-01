
import './App.css';
import { Navbar } from './Componenets/Navbar/Navbar';
import { Routers } from './Componenets/routers/Routers';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
