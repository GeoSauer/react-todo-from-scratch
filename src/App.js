import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { useUserContext } from './context/UserContext';
import Auth from './components/Auth/Auth';
import Tasks from './components/Tasks/Tasks';

function App() {
  const { user } = useUserContext();
  return (
    <>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route exact path="/auth">
          {!user && <Redirect to="/auth/sign-in" />}
          {user && <Redirect to="/tasks" />}
        </Route>
        <Route exact path="/">
          {!user && <Redirect to="/auth/sign-in" />}
          {user && <Redirect to="/tasks" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
