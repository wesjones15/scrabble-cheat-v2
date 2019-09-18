import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/base.css';
import './styles/InputForm.css';
import './styles/InputTile.css';
import { ScrabbleCheatApp } from './components/ScrabbleCheatApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ScrabbleCheatApp />, document.getElementById('root'));
serviceWorker.unregister();
