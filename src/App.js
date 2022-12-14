
import './App.css';
import { Navbar } from './Componenets/Navbar/Navbar';
import { Routers } from './Componenets/routers/Routers';
import { useAuth0 } from "@auth0/auth0-react";
import LabelBottomNavigation from './Componenets/Navbar/BottomNavigation';
import { Footer } from './Componenets/Footer/Footer';

function App() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="App">
      <Navbar />
      <br/>
      <Routers />
      <Footer/>
      <LabelBottomNavigation/>
    </div>
  );
}

export default App;
