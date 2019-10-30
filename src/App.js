import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import Header from './Header';

const head = {
    marginLeft:'30%'
  }
function App() {
  return (
    <Provider store={store}>
    <div className="App">
<Header />
     <UserTable />
     <h3 style = {head}> Add New User </h3>
      <UserForm />
    </div>
    </Provider>
  );
}

export default App;