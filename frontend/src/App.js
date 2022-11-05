import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">TwojeKorki</a>
      </header>
      <main>
        <h1>Ogłoszenia Użytkowników</h1>
        <div className="announcements">
          {data.announcments.map((announcment) => (
            <div className="announcement" key={announcment._id}>
              <a href={`/announcement/${announcment._id}`}>
                <img src={announcment.image} alt={announcment.title} />
              </a>
              <div className="announcement-info">
                <a href={`/announcement/${announcment._id}`}>
                  <p>{announcment.title}</p>
                </a>
                <p>{announcment.price}</p>
                <button>Wejdź do Ogłoszenia</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
