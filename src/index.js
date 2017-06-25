import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';

import FlexTable from './components/FlexTable';
import FlexStackTabs from './components/FlexStackTabs';
import './index.css';

const TabTheme = styled.div`
  .FlexStackTabs{
    padding: 0;
    max-width: 900px;

    /* RF theme */
  	border-radius: 3px;
  	background-color: #fff;
  	box-shadow: 1.4px 1.4px 5px 0 rgba(204, 204, 204, 0.47);
  	border: solid 1px #d8d8d8;

  }
  .Tab{
    border: 0px;
    margin-bottom: 0px;

    /* RF theme */
    padding: 0px;
    height: 70px;
    background:#fff;
  	box-shadow: 2.2px 2px 4.6px 0.4px rgba(204, 204, 204, 0.47);
  	border: solid 1px #d8d8d8;
    border-bottom: 3px solid #fff;

    &:hover{
      background: #eee;
      border-bottom: 3px solid #eee;
    }
    &.active{
      border-bottom: 3px solid #06bae4;
    	box-shadow: 2.2px 2px 4.6px 0.4px rgba(204, 204, 204, 0.47);
    }
  }
  .Panel{
    border:0;
    padding:0;
  }
`;

const App = () => (
  <div>
    <TabTheme>
      <FlexStackTabs />
    </TabTheme>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
