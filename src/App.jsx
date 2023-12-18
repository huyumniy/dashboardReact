import './App.scss'
import Sidebar from './Components/Sidebar';
import MainWindow from './Components/MainWindow';
import EmptyWindow from './Components/EmptyWindow';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <main>
        <Sidebar/>
        <Routes>
          <Route path="/dashboardReact" element={<EmptyWindow />}/>
          <Route path="/dashboardReact/product" element={<EmptyWindow />}/>
          <Route path="/dashboardReact/customers" element={<MainWindow />} />
          <Route path="/dashboardReact/income" element={<EmptyWindow />}/>
          <Route path="/dashboardReact/promote" element={<EmptyWindow />}/>
          <Route path="/dashboardReact/help" element={<EmptyWindow />}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App