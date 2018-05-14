import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import styles from "./css/styles.scss";
import MainPage from "./pages/main";

class App extends Component {
    render() {
        return (
            <MainPage />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
