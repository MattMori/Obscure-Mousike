import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/"> Home </Route>
      </Routes>
    </Router>
  )
}

export default App
