import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

// Import Pages
import Trending from '../../pages/Trending/index'
import Movies from '../../pages/Movies/index'
import Series from '../../pages/Series/index'
import Search from '../../pages/Search/index'


// Import Components
import Header from '../Header';
import MainFooterNav from '../MainFooterNav/index';

// Import Styles
import './styles/App.Styles.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/series" component={Series} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Container>
        </div>
        <MainFooterNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
