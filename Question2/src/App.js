import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import TrainDetails from './Components/Traindetails/TrainDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/train-details' element={<TrainDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
