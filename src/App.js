import { Switch, Route } from 'react-router-dom';
// import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Hompage from './pages/hompage/hompage';

// <Link to="/topics/12">Topic 12</Link>
// <button onClick={() => props.history.push('/topics/13')}>Topic 13</button>
// <Link to={`${props.match.url}/13`}>Topic 13</Link>
// <Route exact path="/" component={Topics} />
// <Route path="/topics/:topicId" component={TopicId} />

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
