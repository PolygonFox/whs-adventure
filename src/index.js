import React from 'react';
import ReactDOM from 'react-dom';

import Adventure from './containers/Adventure';

const App = () => <Adventure />;

const DOMContainer = document.getElementById('app');
ReactDOM.render(<App />, DOMContainer);
