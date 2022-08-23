import './App.css';
import Surfing from './components/surfing';
import SurfingKind from './components/surfing_kind';
import Details from './components/details'
import Result from './components/result';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Surfing />} />
      <Route exact path="/surfing_kind" element={<SurfingKind />} />
      <Route exact path="surfing_kind/details" element={<Details />} />
      <Route exact path="surfing_kind/details/result" element={<Result />} />
    </Routes>
    </Router>
  );
}

export default App;
