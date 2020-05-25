import React from 'react';
import logo from './logo.svg';
import './App.css';

import Pocket from '@natade-coco/pocket-sdk';
import JPQR from '@natade-coco/jpqr';

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
          const code = JPQR.mpmEncode({
            payloadFormatIndicator: '01',
            pointOfInitiationMethod: 'dynamic',
            merchantAccountInformation: [{
              tag: '26',
              length: '68',
              value: '0019jp.or.paymentsjapan011300000000000010204000103060000010406000001'
            }],
            merchantCategoryCode: '5812',
            transactionCurrency: '392',
            transactionAmount: '498',
            countryCode: 'JP',
            merchantName: 'xxx',
            merchantCity: 'xxx',
            postalCode: '5300005',
            merchantInformation: {
              languagePreference: 'JA',
              name: 'ナタデココ カフェ',
              valid: true
            }
          });
          console.log(code);
          alert(code);
        }}>
          MPM Encode
        </button>
      </header>
    </div>
  );
}

export default App;
