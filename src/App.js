import React from 'react';
// import Axios from 'axios'
// import {NavLink} from 'react-router-dom'
// import Index from './components/Index'
import './App.css';
import MyRouter from './router/MyRouter'



class App extends React.Component{
  render() {
    return (
        <div className="App">
          {/*<Index></Index>*/}
            <MyRouter />
              {/*<Router />*/}


        </div>
    );
  }


}

export default App;
