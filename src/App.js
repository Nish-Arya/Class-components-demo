import { Route } from 'react-router-dom';
import Parent from './components/Parent';

function App() {
  return (
    <>
      <Route path='/' exact>
        <Parent />
      </Route>
      <Route path='test'>
        <h1>hi there!</h1>
      </Route>
    </>
  );
}

export default App;
