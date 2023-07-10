import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const UserSignOut = (props) => {
  useEffect(() => props.signOut());
  return (
    <Navigate to="/" replace />
  );
};

export default UserSignOut;