import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">TwojeKorki</Link>
        </header>
        <main>
          <Routes>
            <Route path="/announcement/:_id" element={<AnnouncementScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
