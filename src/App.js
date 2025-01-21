import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/Home/index.js'
import UserDetail from './components/UserDetail.js/index.js';
import NotFound from './components/NotFound/index.js'
const App = () =>{
  return (
    <BrowserRouter>
     
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/address' element ={<UserDetail/>} />
      <Route element = {<NotFound/>}/>
    </Routes>
         
    </BrowserRouter>
  );
}

export default App;
