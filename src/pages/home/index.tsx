import * as ReactDOM from "react-dom";
import * as React from "react";
import { RouteNameEnum } from '../../constants/enums';
import config from '../../services/config';

export default class MainPage extends React.Component{
    render(){
        return (<div>hello word{RouteNameEnum.Game}{config.APP_VERSION}</div>)
    }
}

ReactDOM.render(<MainPage />, document.getElementById('root'));
