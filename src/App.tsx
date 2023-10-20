import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import MovieBucketAPI from './api';

export default function App() {

  async function login({username, password}){
    const response = await MovieBucketAPI.login(username, password)

    console.log(response)
  }

  return (
    <Router>
      <Navigation />
      <Homepage login={login}/>
      {/* <Switch> */}
        {/* <Route path="/" exact component={Homepage} />
        <Route path="/my-buckets" component={BucketList} />
        <Route path="/account" component={Account} /> */}
      {/* </Switch> */}
    </Router>
  )
}
