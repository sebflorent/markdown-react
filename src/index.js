// Ici on code notre App
import React from 'react';
import { render } from 'react-dom';

import './style/css/bootstrap.min.css';
import './index.css';

import { sampleText } from './sampleText';

//Marked.js
import marked from 'marked';

class App extends React.Component {
    //on crée un state dans lequel on importe le contenu du fichier sampleText
    state = {
        text: sampleText
    };
    componentWillMount() {
        const localStorageText = localStorage.getItem('text');
        if(localStorageText) {
            this.setState({text:localStorageText})
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('text', nextState.text);
    }
    //à chaque changement dans le form, on met à jour le state
    editText=(event) => {
        const text = event.target.value;
        this.setState({text})
    }

     //on affiche le rendu avec markdown / sanitize évite l'inclusion de html
    renderText = (text) => {
        const renderText = marked(text, {sanitize :true});
        return { __html:renderText}
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea 
                            rows="35" 
                            className="form-control" 
                            value={this.state.text}
                            onChange={(e) => this.editText(e)}
                            >
                        </textarea>
                    </div>
                    <div className="col-sm-6">
                        <h1>Resultats</h1>
                        <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
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