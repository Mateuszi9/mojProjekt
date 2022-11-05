import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Ogłoszenia Użytkowników</h1>
      <div className="announcements">
        {data.announcments.map((announcment) => (
          <div className="announcement" key={announcment._id}>
            <Link to={`/announcement/${announcment._id}`}>
              <img src={announcment.image} alt={announcment.title} />
            </Link>
            <div className="announcement-info">
              <Link to={`/announcement/${announcment._id}`}>
                <p>{announcment.title}</p>
              </Link>
              <p>{announcment.price}</p>
              <button>Wejdź do Ogłoszenia</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
