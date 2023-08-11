import './App.css'
import { connect, disconnect } from '@argent/get-starknet'
import { useState, useEffect } from 'react'
import { Contract, number } from 'starknet'
import { feltToString, stringToFelt } from './utils/utils'

import contractAbi from './abis/abi.json'
const contractAddress = "0x049e5c0e9fbb072d7f908e77e117c76d026b8daf9720fe1d74fa3309645eabce"

function App() {
  const [connection, setConnection] = useState();
  const [account, setAccount] = useState();
  const [address, setAddress] = useState();

  const [name, setName] = useState('')
  const [inputAddress, setInputAddress] = useState('')
  const [retrievedName, setRetrievedName] = useState('')

  const connectWallet = async() => {

  }

  const disconnectWallet = async() => {

  }

  const setNameFunction = async() => {

  }

  const getNameFunction = async() => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <main className="main">
          <h1 className="title">
            Starknet<a href="#"> ENS</a>
          </h1>
            <button className="connect" onClick={connectWallet}>Connect wallet</button>

          <p className="description">
          {/* address */}
          </p>

          <div className="grid">
            <div href="#" className="card">
              <h2>Ensure to connect to Mainnet! &rarr;</h2>
              <p>What name do you want?.</p>

              <div className="cardForm">
                <input type="text" className="input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />

                <input type="submit" className="button" value="Store Name" onClick={setNameFunction} />
              </div>

              <hr />

              <p>Insert a wallet address, to retrieve its name.</p>
              <div className="cardForm">
                <input type="text" className="input" placeholder="Enter Address" onChange={(e) => setInputAddress(e.target.value)} />

                <input type="submit" className="button" value="Get Name" onClick={getNameFunction} />
              </div>
              <p>Name: {retrievedName}.eth</p>
            </div>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;