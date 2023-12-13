import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import MainWindow from './Components/MainWindow/MainWindow';
import EmptyWindow from './Components/EmptyWindow/EmptyWindow';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmptyWindow />}/>
          <Route path="/product" element={<EmptyWindow />}/>
          <Route path="/customers" element={<MainWindow />} />
          <Route path="/income" element={<EmptyWindow />}/>
          <Route path="/promote" element={<EmptyWindow />}/>
          <Route path="/help" element={<EmptyWindow />}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App