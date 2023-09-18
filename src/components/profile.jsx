import { UserProfile } from '@clerk/clerk-react';
import '../styles/profile.css';
import { Helmet } from 'react-helmet';

const Profile = () => {
  return (
    <div className="profile">
        <Helmet>
            <title>Profile</title>
        </Helmet>

        <UserProfile />
    </div>
  );
}

export default Profile;