import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AnnouncementScreen from './screens/AnnouncementScreen';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>TwojeKorki</NavBar.Brand>
              </LinkContainer>
            </Container>
          </NavBar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route
                path="/announcement/:_id"
                element={<AnnouncementScreen />}
              />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
