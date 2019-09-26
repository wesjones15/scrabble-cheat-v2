import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/base.css';
import './styles/InputForm.css';
import './styles/InputTile.css';
import './styles/Result.css';
import './styles/ScrabbleCheatApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrabbleCheatApp } from './components/ScrabbleCheatApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ScrabbleCheatApp />, document.getElementById('root'));
serviceWorker.unregister();
