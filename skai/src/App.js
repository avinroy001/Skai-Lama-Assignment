// import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Landing from './Landing/Landing';
import HomePage from './HomePages/HomePage';


function App() {
  return (
    <Routes>
     <Route path='/' element={ <HomePage/> }/>
    </Routes>
  );
}

export default App;
