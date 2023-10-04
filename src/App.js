import './App.css'
import { connect, disconnect } from '@argent/get-starknet'
import { useState, useEffect } from 'react'
import { Contract, number } from 'starknet'
import { feltToString, stringToFelt } from './utils/utils'

import contractAbi from './abis/abi.json'
const contractAddress = "0x077e0925380d1529772ee99caefa8cd7a7017a823ec3db7c003e56ad2e85e300"

function App() {
  const [connection, setConnection] = useState();
  const [account, setAccount] = useState();
  const [address, setAddress] = useState();

  const [retrievedValue, setRetrievedValue] = useState('')

  const connectWallet = async() => {

  }

  const disconnectWallet = async() => {

  }

  const increaseCounter = async() => {

  }

  const decreaseCounter = async() => {

  }

  const getCounter = async() => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <main className="main">
          <h1 className="title">
            Starknet<a href="#"> Counter</a>
          </h1>
            <button className="connect" onClick={connectWallet}>Connect wallet</button>

          <p className="description">
          {/* address */}
          </p>

          <div className="grid">
            <div href="#" className="card">
              <h2>Ensure to connect to Mainnet! &rarr;</h2>

              <p>Increase/Decrease Counter.</p>
              <div className="cardForm">
                <input type="submit" className="button" value="Increase" onClick={increaseCounter} />
                <input type="submit" className="button" value="Decrease" onClick={decreaseCounter} />
              </div>

              <hr />
              <div className="cardForm">
                <input type="submit" className="button" value="Get Counter" onClick={getCounter} />
                <p>{retrievedValue}</p>
              </div>
            </div>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;