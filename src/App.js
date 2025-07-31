import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {

  return (
    <>
      <BrowserView>
        <div className="App">
          <Header />
          <Content />
        </div>
      </BrowserView>
      <MobileView>
        <div className='mobile-view'>
          <div className='not-supported-text'>CYBERWARE IS NOT RECOGNIZED</div>
          <div className='not-supported-text'>AUTHORIZE ACCESS POINT WITH FULL VIDEO RESOLUTION</div>
        </div>
      </MobileView>
    </>
  )
}

export default App;
