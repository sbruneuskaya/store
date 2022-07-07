import React from "react";
import styles from './App.module.scss';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/pages/home";
import Search from "./components/pages/search";
import Profile from "./components/pages/profile";
import Contacts from "./components/pages/contacts";



class App extends React.Component {

    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/store_project" element={<Home/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>
            </>
        );
    }
}

export default App;
