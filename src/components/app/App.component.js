import Counter from 'components/counter';
import User from 'components/user';
import styles from './app.module.scss';

const App = () => (
  <div className={styles.root}>
    <h1>RTL Demo</h1>
    <Counter initialCount={1} />
    <User />
  </div>
);

export default App;
