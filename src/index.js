// Ici on code notre App
import React from 'react';
import { render } from 'react-dom';

import './style/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea></textarea>
                    </div>
                    <div className="col-sm-6">
                        <h1>Resultats</h1>
                    </div>
                </div>
            </div>

        )
    }
} 

render (
    <App />,
    document.getElementById('root')
);