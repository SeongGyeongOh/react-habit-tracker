import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'
import SampleHabit from './components/sampleHabit';

ReactDOM.render( 
  <React.StrictMode>
    <SampleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);

