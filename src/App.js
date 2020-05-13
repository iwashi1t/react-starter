import React from 'react';
import logo from './logo.svg';
import './App.css';

import Pocket from '@natade-coco/pocket-sdk';
import EMV from '@natade-coco/emv-code';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => {
          Pocket.getCCInfo()
            .then(response => alert(JSON.stringify(response)))
            .catch(error => alert(error));
        }}>
          Get CCInfo
        </button>
        <button onClick={() => {
          Pocket.getProfile(['nickname', 'name', 'tel', 'image'])
            .then(response => alert(JSON.stringify(response)))
            .catch(error => alert(error));
        }}>
          Get Profile
        </button>
        <button onClick={() => {
          Pocket.getEthereumAddress()
            .then(response => alert(JSON.stringify(response)))
            .catch(error => alert(error));
        }}>
          Get EthereumAddress
        </button>
        <button onClick={() => {
          const target = 'did:ethr:0x76113d46cd96164cd273f0f540e869c25ff7d240';
          const path = `/orders/order-1111`;
          const allows = ['did:ethr:0x076a26dd8b99750d0123a63c28ea72a336e90114'];
          Pocket.connectToPayoffApp(target, path, allows)
            .then(response => alert(JSON.stringify(response)))
            .catch(error => alert(error));
        }}>
          Connect to PayoffApp
        </button>
        <button onClick={() => {
          Pocket.requestSignJWT()
            .then(response => alert(JSON.stringify(response)))
            .catch(error => alert(error));
        }}>
          Request SignJWT
        </button>
        <button onClick={() => {
          EMV.getJPQR();
        }}>
          Get JPQR
        </button>
      </header>
    </div>
  );
}

export default App;
