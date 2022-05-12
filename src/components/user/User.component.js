import { useDispatch, useSelector } from 'react-redux';

import styles from './user.module.scss';
import { fetchUser, selectUser, selectUserFetchStatus } from './user.slice';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userFetchStatus = useSelector(selectUserFetchStatus);

  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <span>{user ? user.name : 'No user'}</span>
        <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
      </div>
      {userFetchStatus === 'loading' && <div>Fetching user...</div>}
    </div>
  );
};

export default User;
