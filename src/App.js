import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/tuiter";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Provider } from 'react-redux';
import whoReducer from './tuiter/reducers/who-reducer';
import tuitsReducer from './tuiter/reducers/tuits-reducer';
import navReducer from './tuiter/reducers/nav-reducer';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore(
    { reducer: { who: whoReducer, tuits: tuitsReducer, activeNav: navReducer } });

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path='/*'
                        element={<Labs />} />
                    <Route path="/hello"
                        element={<HelloWorld />} />
                    <Route path="/tuiter/*"
                        element={<Provider store={store}><Tuiter /></Provider>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
