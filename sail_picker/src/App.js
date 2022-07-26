import './App.css';
import Surfing from './components/surfing';
import Windsurfing_kind from './components/windsurfing_kind';
import Wingsurfing_kind from './components/wingsurfing_kind';
import Kitesurfing_kind from './components/kitesurfing_kind';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Surfing />} />
      <Route exact path="/windsurfing" element={<Windsurfing_kind />} />
      <Route exact path="/kitesurfing" element={<Kitesurfing_kind />} />
      <Route exact path="/wingsurfing" element={<Wingsurfing_kind />} />
    </Routes>
    </Router>
  );
}

export default App;
