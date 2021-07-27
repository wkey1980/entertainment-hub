import Header from '../Header';
import './styles/App.Styles.css';
import MainFooterNav from '../MainFooterNav/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Trending from '../../pages/Trending/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            {/* <Route exact path="/movies" component={Movies} /> */}
            {/* <Route exact path="/series" component={Series} /> */}
            {/* <Route exact path="/search" component={Search} /> */}
          </Switch>
          Movie App
        </Container>
        </div>
        <MainFooterNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
