import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import store from './redux/redux-store';

const App = (props) => {
  return (
            <div className='app-wrapper'>
                <Header />
                <Navbar store={props.store} />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs
                        store={props.store} />}/>
                    <Route path='/profile' render={ () => <Profile
                        store={props.store} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
  );
}

export default App;
