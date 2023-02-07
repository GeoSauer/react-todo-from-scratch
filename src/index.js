import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { TasksProvider } from './context/TasksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrap everything in BrowserRouter so Nav/Links work */}
    <BrowserRouter>
      {/* wrap app in UserProvider so that user is available anywhere within */}
      <UserProvider>
        {/* wrap app in TasksProvider so that tasks are available anywhere within */}
        <TasksProvider>
          <App />
        </TasksProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
