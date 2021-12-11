import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Homepage, Result } from './pages';

function App() {
  let navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Homepage navigate={navigate} />} />
      <Route path="/result" exact element={<Result navigate={navigate} />} />
    </Routes>
  );
}

export default App;
