
import './App.css';
import {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavB from './Components/NavB';
import Cont from './Components/cont/Cont';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/details/Details';
function App() {
  const [text, setText] = useState("")
  const options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
    params: {ingr: text},
    headers: {
      'X-RapidAPI-Key': '1494826916msh87ccd689b4cb2d1p1dadf1jsned311779ae75',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };  
  return (
    <div className="App">
        <NavB text={text} setText={setText} options={options} />
      <Routes>
       <Route path='/' element={<Cont options={options} text={text} setText={setText} />} />
       <Route path='/food/:id' element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;