import logo from './images/argent.png';
import './App.css';
import { connect, disconnect } from '@argent/get-starknet';
import { useEffect, useState } from 'react';

function App() {
 const [connection, setConnection] = useState('')
 const [provider, setProvider] = useState('')
 const [address, setAddress] = useState('')

 useEffect(() => {
  const connectToStarknet = async() => {
    const connection = await connect({modalMode: "neverAsk", webWalletUrl: "https://web.argent.xyz"})
    
    if(connection && connection.isConnected) {
      setConnection(connection)
      setProvider(connection.account)
      setAddress(connection.selectedAddress)
    }
  }
  connectToStarknet()
 }, [])

 const connectWallet = async() => {
  const connection = await connect({webWalletUrl: "https://web.argent.xyz"});

  if(connection && connection.isConnected) {
    setConnection(connection)
    setProvider(connection.account)
    setAddress(connection.selectedAddress)
  }
 }

 const disconnectWallet = async() => {
  await disconnect()
  setConnection(undefined)
  setProvider(undefined)
  setAddress('')
 }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='title'>
          Address: {address}
        </p>
        {
          !connection ? <button className='connectbtn' onClick={connectWallet}>Connect</button>
          : <button className='connectbtn' onClick={disconnectWallet}>Disconnect</button>
        }
        
      </header>
    </div>
  );
}

export default App;
