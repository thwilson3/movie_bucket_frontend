import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';

export default function App() {

  return (
    <Router>
      <Navigation />
      <Homepage />
      {/* <Switch> */}
        {/* <Route path="/" exact component={Homepage} />
        <Route path="/my-buckets" component={BucketList} />
        <Route path="/account" component={Account} /> */}
      {/* </Switch> */}
    </Router>
  )
}
