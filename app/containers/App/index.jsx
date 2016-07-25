import React, { Component } from 'react';
import { MyComponent } from '../../components';
import { CommentBox } from '../../components';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommentBox />
      </div>
    );
  }
}

export default App;
