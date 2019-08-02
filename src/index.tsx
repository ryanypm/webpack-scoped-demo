import { render } from 'react-dom';
import * as React from 'react';
// import styles from "./css/styles.scss";
import MainPage from "./pages/home/index";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>测试</h1>
                <MainPage />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
