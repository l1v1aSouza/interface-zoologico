import './App.css'
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom'
import Depoimentos from './pages/Depoimentos/Depoimentos';
import Fotos from './pages/Fotos/Fotos';
import Login from './pages/Login/Login';

function App() {

  return (
    <>
     <Roteador>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/animais' Component={Animais} />
        <Route path='/depoimentos' Component={Depoimentos} />
        <Route path='/fotos' Component={Fotos} />
        <Route path='/login' Component={Login} />
      </Routes>
     </Roteador>
    </>
  )
}

export default App;