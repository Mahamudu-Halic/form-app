import { useState } from 'react';
import '../styles/video.css';
import { VideoRoom } from './VideoRoom';
import { Helmet } from 'react-helmet';

const Video = () => {
  const [joined, setJoined] = useState(false);
  return (
    <div className="video">
        <Helmet>
            <title>Video Call</title>
        </Helmet>
    </div>
  );
}

export default Video;