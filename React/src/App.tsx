import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import TabPanel from 'devextreme-react/tab-panel';

const tabPanelItems = [
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const commonConfiguration = {
  width: 400,
  itemRender: Item,
  itemTitleRender: Title,
  dataSource: tabPanelItems,
  focusStateEnabled: false,
  scrollByContent: true,
  scrollingEnabled: true,
  showNavButtons: true,
  deferRendering: true,
};

function TitleWordWrap(props: any): JSX.Element {
  return (
    <div title={props.title} className='wordwrap'>
      {props.title}
    </div>
  );
}

function Title(props: any): JSX.Element {
  return <div>{props.title}</div>;
}

function Item(props: any): JSX.Element {
  return <div>{props.title}</div>;
}

function App(): JSX.Element {
  return (
    <div className='dx-viewport demo-container'>
      <p>
        <b>Display ellipses (...)</b>
      </p>
      <TabPanel
        {...commonConfiguration}
        itemTitleRender={TitleWordWrap}
        className='tabs'
      ></TabPanel>

      <p>
        <b>Show full text</b>
      </p>
      <TabPanel
        id='tabpanel2'
        {...commonConfiguration}
        className='tabs'
      ></TabPanel>

      <p>
        <b>Display text line by line</b>
      </p>
      <TabPanel id='tabpanel3' {...commonConfiguration}></TabPanel>
    </div>
  );
}

export default App;
