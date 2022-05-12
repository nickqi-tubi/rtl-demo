import Counter from 'components/counter/Counter.component';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.root}>
    <h1>RTL Demo</h1>
    <Counter initialCount={1} />
  </div>
);

export default App;
