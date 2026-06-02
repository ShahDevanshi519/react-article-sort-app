import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Add from './Add';
import Display from './Display';
function App(){
  return(<>
    <h1>Artical Sort!</h1>
    <Router>
      <Link to="/add">Add</Link> | 
      <Link to="/display">Display</Link>
      <Routes>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/display" element={<Display/>}></Route>
      </Routes>
    </Router>
  </>)
}

export default App