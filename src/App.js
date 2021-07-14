import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Signin from "./views/Sigin/Signin";
import Signup from "./views/Siginup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Story from "./components/Story/Story";
import Feed from "./views/Feed/Feed";
import Profile from "./views/Profile/Profile";
import AccountSetting from "./views/Settings/AccountSetting";
import { useEffect, useState } from "react";

function App() {
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    setSigned(localStorage.getItem('tale_user_details')?true:false);
  }, [])

  return (
    <Router>
    <Header signed={signed} setSigned={setSigned} />
      <Switch>
        <div className='mt-15'>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={()=><Signin signed={signed} setSigned={setSigned} />} />
          <Route path="/register" exact component={()=><Signup  signed={signed} setSigned={setSigned} />} />
          <Route path="/story" exact component={Story} />
          <Route path="/feed" exact component={Feed} />
          <Route path="/show/:user" exact component={Profile} />
          <Route path="/accountsetting" exact component={AccountSetting} />
        </div>
      </Switch>
    </Router>

  );
}

export default App;
