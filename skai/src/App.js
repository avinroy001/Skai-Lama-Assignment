// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing/Landing';
import HomePage from './HomePages/HomePage';
import UploadFlowOne from './UploadFlow/UploadFlowOne';

function App() {
  return (
    <Routes>
     <Route path='/' element={ <Landing/> }/>
     <Route path='/HomePage' element={ <HomePage/> }/>
     <Route path='/UploadFlowOne' element={ <UploadFlowOne/> }/>
    </Routes>
  );
}

export default App;
