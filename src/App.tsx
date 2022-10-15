import React from 'react';
import Counter from "./components/Counter";
import './App.css';
import {Provider} from "react-redux";
// import store from "./state/store";

function App() {
    return (
        // <Provider store={store}>
            <div className={"App"}>
                <Counter/>
            </div>
        // </Provider>
    );
}

export default App;
