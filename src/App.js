import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './STORE';
import participants from './participants';
import chat from './chat';
import stage from './stage';
import './App.css';

import Split from './composition/Split';

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Split className='left' flexBasis={2}>
          This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
        <Split className='right'>
          This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      </main>
    )
  }
}

export default App;