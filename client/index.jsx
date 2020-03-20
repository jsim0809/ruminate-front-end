import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import QA from './components/QA';

ReactDOM.render(<QA restaurantID={path.basename(document.URL)} modalRootNode={document.getElementById('modal-root')} />, document.getElementById('q-a'));
