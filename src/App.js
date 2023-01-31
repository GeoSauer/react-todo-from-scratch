import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { useUserContext } from './context/UserContext';
import Auth from './components/Auth/Auth';

function App() {
  const { user } = useUserContext();
  return (
    <>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route exact path="/">
          {!user && <Redirect to="/auth/sign-in" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
