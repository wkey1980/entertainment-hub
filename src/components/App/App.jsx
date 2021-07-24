import Header from '../Header';
import './styles/App.Styles.css';
import MainNav from '../MainNav/index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <div className="app">Test</div>
        <MainNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
