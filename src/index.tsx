import { render } from 'react-dom';
import React from 'react';
import './index.scoped.scss';

const App: React.FC = (): React.ReactElement => {
    return (
        <div>
            <h1 className="title">Test</h1>
        </div>
    );
}

render(<App />, document.getElementById('root'));
