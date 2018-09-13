import React, { Component } from "react";
import ReactDOM from "react-dom";

import Adventure from './containers/Adventure';

class App extends Component {

    render() {
        return (
            <Adventure />
        )
    }
}

const DOMContainer = document.getElementById('app');
ReactDOM.render(<App />, DOMContainer);