import UserForm from './components/User';

import Header from './components/Header'

import './styles/App.css'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main">
          <UserForm/>
        </div>
    </div>
  );
}

export default App;
