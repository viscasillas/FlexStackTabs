import React, { Component } from 'react';
import styled from 'styled-components';
import browser from 'detect-browser';
import FlexTable from './FlexTable';

const ThemedTable = styled.div`
  .FlexTable, .ColumnContainer, .CellContainer, .EyebrowCell, .EyebrowContainer{
    border: 0;
    padding:0;
  }
`;

var tabs = [
  {
    title: 'T1',
    panel: <ThemedTable><FlexTable /></ThemedTable>
  },
  {
    title: 'T2',
    panel: 'P2'
  },
  {
    title: 'T3',
    panel: <ThemedTable><FlexTable /></ThemedTable>
  }
];

var configuration = {
  defaultActive: 0,
  tabCount: 3,
  collapsePoint: 768
};

const TemporaryBar = styled.div`
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  padding:10px;
  text-align: center;
  font-weight: bold;
  margin:0;
  background: rgb(235, 235, 235);
`;

const Container = styled.div`
  margin-top: 50px;
  /* Presentation Attributes */
  border: 2px solid green;
  padding: 10px;
  /* Flex Attributes */
  display: flex;
  flex: 1 100%;
  flex-direction: row;
  flex-flow: row wrap;

  /* IE 9 Support */
  ${browser.name === 'ie' && browser.version === '9.0.0' ? `
      display:block;
      flex: auto;
      flex-direction: auto;
      flex-flow: auto;
      width: 100%;
      padding:0;
  ` : false};
`;

const Tab = styled.div`
  /* Presentation Attributes */
  border: 2px solid red;
  padding: 10px;
  &:hover{
    background: #eee;
    cursor: pointer;
  }


  /* Flex Attributes */
  display: flex;
  flex: ${configuration.tabCount && configuration.tabCount === 1 ? '1 100%' : configuration.tabCount};
  @media screen and (max-width: ${configuration.collapsePoint && configuration.collapsePoint ? configuration.collapsePoint : '768'}px ){
    flex: 1 100%;
  }
  @media screen and (min-width: ${configuration.collapsePoint && configuration.collapsePoint ? configuration.collapsePoint : '768'}px ){
    order: 1;
  }
  flex-direction: column;
  flex-flow: row wrap;


  /* Temporary */
  margin-bottom: 10px;

  /* Order */
  order: ${props => props.order && props.order};

  /* IE 9 Support */
  &.ie9{
    display:inline-block;
    width: calc(100% / ${configuration.tabCount});
    padding: 0;
    @media screen and (max-width: ${configuration.collapsePoint && configuration.collapsePoint ? configuration.collapsePoint : '768'}px ){
      width: 100%;
    }
  }
`;

const Panel = styled.div`
  /* Presentation Attributes */
  border: 2px solid red;
  padding: 10px;
  min-height: 300px;
  height: auto;
  /* Flex Attributes */
  display: none;
  flex: 1 100%;
  flex-flow: row wrap;
  outline: none;

  /* Temporary */
  margin-bottom: 10px;

  /* Order */
  order: ${props => props.order && props.order};


  @media screen and (min-width: ${configuration.collapsePoint && configuration.collapsePoint ? configuration.collapsePoint : '768'}px ){
    order: 10;
  }

  &.active{
    display:flex;
    flex-direction: column;


    /* IE 9 Support */
    ${browser.name === 'ie' && browser.version === '9.0.0' ? `
        display:block;
        width: 100%;
    ` : false};
  }
`;

export default class FlexStackTabs extends Component {
  constructor(props) {
    super();
    this.state = {
      currentTab: configuration.defaultActive,
      currentWidth: window.innerWidth
    };
  }
  componentDidMount() {
    this.setState({
      currentTab: configuration.defaultActive
    });
    window.onresize = event => {
      this.setState({
        currentWidth: window.innerWidth
      });
    };
  }
  handleTabClick = tab => {
    if (tab === this.state.currentTab) {
      this.setState({
        currentTab: tabs.length * 10
      });
    } else {
      this.setState({
        currentTab: tab
      });
    }
  };

  render() {
    const renderTabs = tabs.map((item, i) => {
      let order = i + 1;
      let ieFallback = false;
      if (browser.name === 'ie' && browser.version === '9.0.0') {
        ieFallback = `ie9`;
      } else {
        ieFallback = ``;
      }
      console.log(ieFallback);
      return (
        <Tab
          key={i}
          order={order}
          onClick={() => this.handleTabClick(i)}
          className={`Tab ${ieFallback} ${this.state.currentTab === i ? `active` : ``}`}
        >
          {item.title}
        </Tab>
      );
    });

    const renderPanels = tabs.map((item, i) => {
      let index = i + 2;
      return (
        <Panel
          key={i + tabs.length}
          className={`Panel ${this.state.currentTab === i ? `active` : ``}`}
          order={this.state.currentTab + 1}
        >
          {item.panel}
          {/* <div><FlexTable tableId={item.panel} /></div> */}

        </Panel>
      );
    });

    return (
      <div>
        {/* <TemporaryBar>
          currentTab: {this.state.currentTab} currentWidth: {this.state.currentWidth}
        </TemporaryBar> */}
        <Container className={`FlexStackTabs`}>
          {renderTabs}
          {renderPanels}
        </Container>
      </div>
    );
  }
}
