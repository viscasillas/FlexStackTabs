import React, { Component } from 'react';
import styled from 'styled-components';
import browser from 'detect-browser';

var configuration = {
  columnCount: 3,
  collapsePoint: '768px'
};

const Container = styled.div`
  /* Presentation Attributes */
  border: 2px solid green;
  padding: 10px;
  /* Flex Attributes */
  display: flex;
  flex: 1 100%;
  flex-direction: column;
  flex-flow: row wrap;
`;

const EyebrowContainer = styled.div`
  /* Presentation Attributes */
  border: 2px solid blue;
  padding: 10px;
  /* Flex Attributes */
  flex: 1 100%;
`;

const EyebrowCell = styled.div`
    /* Presentation Attributes */
    border: 2px solid red;
    padding: 10px;
    /* Flex Attributes */
    flex: 1 100%;
  `;

const ColumnContainer = styled.div`
    /* Presentation Attributes */
    border: 2px solid blue;
    padding: 10px;
    /* Flex Attributes */
    flex: ${configuration.columnCount && configuration.columnCount == 1 ? '1 100%' : configuration.columnCount};
    @media screen and (max-width: ${configuration.collapsePoint && configuration.collapsePoint ? configuration.collapsePoint : '768px'} ){
      flex: 1 100%;
    }
    /* Temporary */
    &:last-child{
    margin-top: 0px;
    }
    ${/* margin-top: 10px; */ ''}
`;

const CellContainer = styled.div`
    /* Presentation Attributes */
    border: 2px solid red;
    padding: 10px;
    font-weight: ${props => props.header && 'bold'};

    /* Flex Attributes */
    flex: 1 100%;

    /* Temporary */
    &:last-child{
    margin-bottom: 0px;
    }
    margin-bottom: 10px;


`;

export default class FlexTable extends Component {
  componentDidMount() {
    console.log(browser.name);
    console.log(browser.version);
  }
  render() {
    return (
      <div>
        <Container className="FlexTable">

          <EyebrowContainer className="EyebrowContainer">
            <EyebrowCell className="EyebrowCell">
              Eyebrow 1
            </EyebrowCell>
          </EyebrowContainer>

          <ColumnContainer className="ColumnContainer">
            <CellContainer header className="CellContainer">H1</CellContainer>
            <CellContainer className="CellContainer">C1-1</CellContainer>
            <CellContainer className="CellContainer">C1-2</CellContainer>
            <CellContainer className="CellContainer">C1-3</CellContainer>
          </ColumnContainer>

          <ColumnContainer className="ColumnContainer">
            <CellContainer header className="CellContainer">H2</CellContainer>
            <CellContainer className="CellContainer">C2-1</CellContainer>
            <CellContainer className="CellContainer">C2-2</CellContainer>
            <CellContainer className="CellContainer">C2-3</CellContainer>
          </ColumnContainer>

          <ColumnContainer className="ColumnContainer">
            <CellContainer header className="CellContainer">H2</CellContainer>
            <CellContainer className="CellContainer">C2-1</CellContainer>
            <CellContainer className="CellContainer">C2-2</CellContainer>
            <CellContainer className="CellContainer">C2-3</CellContainer>
          </ColumnContainer>

        </Container>
      </div>
    );
  }
}
