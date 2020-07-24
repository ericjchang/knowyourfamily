import React, { useState, useEffect, createContext, useContext } from 'react';
import MyBar from './components/MyBarFunction';
import Home from "./pages/Home";
import Title from './components/Title';
import CardDetail from "./pages/CardDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import FavGame from "./pages/FavGame";
import Search from "./pages/Search";
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/video-react/dist/video-react.css";

export const MyContext = createContext('light')
export const themes = {
  light: {
    foreground: '#db8b1e',
    background: '#2a3235',
  },
  dark: {
    foreground: '#2a3235',
    background: '#db8b1e',
  },
};
export default function App() {

  const [themeColor, setColor] = useState('light')

  return (
    <Router>
      <MyContext.Provider value={{
        theme: themeColor,
        changeTheme: function(){
          themeColor === 'light' ? setColor('dark') : setColor('light')
        }
      }}>
        <Provider store={store}>
        <MyBar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/" exact component={Title} /> */}
            <Route path="/favGame" component={FavGame}/>
            <Route path="/search" component={Search}/>
            <Route path="/games/:id" component={CardDetail} />
          </Switch>
        </div>
        {/* fill={themes[themeColor].foreground} */}
        </Provider>
      </MyContext.Provider>
    </Router>
  );
};
