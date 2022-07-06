import React from "react";
import styles from './App.module.scss';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/pages/home";
import Search from "./components/pages/search";



class App extends React.Component {

    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store" element={<Home/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </>
        )
            ;
    }
}

export default App;
