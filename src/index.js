import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import AppLayout from './modules/productCatalogue/layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppLayout />, document.getElementById('root'));
registerServiceWorker();
