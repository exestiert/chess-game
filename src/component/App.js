import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import '../style/App.css';
import Board from "./Board";
import Homepage from './Homepage';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/"element={<Homepage/>}/>
      <Route path='/chess-game' element={<Navigate to="/"/>}/>
      <Route path='game_start' element={<Board/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
