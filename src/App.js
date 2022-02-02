import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NameForm from "./components/NameForm/NameForm"
import Pokedex from './components/Pokedex/Pokedex'
import PokedexId from './components/PokedexId/PokedexId'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NameForm />} />
        <Route element={ <ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />}/>
          <Route path="/pokedex/:id" element={ <PokedexId />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

