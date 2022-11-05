import { useParams } from 'react-router-dom';

function AnnouncementScreen() {
  const params = useParams();
  const { _id } = params;
  return (
    <div>
      <h1>{_id}</h1>
    </div>
  );
}

export default AnnouncementScreen;
