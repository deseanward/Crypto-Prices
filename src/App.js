import { Route, Routes } from 'react-router-dom';
import Currencies from './routes/Currencies/currencies.component.jsx'
import Main from './routes/Main/main.component'
import Price from './routes/Price/price.component'
import Nav from './components/nav/nav.component'

import './App.css';

function App() {
  return (
    <div className="App">
    <Nav />
      <Routes>
        <Route path='/' element={<Main />} />  
        <Route path='/currencies' element={<Currencies />} />
        <Route path ='/price/:symbol' element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
