import React from 'react'
import { useEffect, useState } from 'react'
import Web3 from "web3"
import { FullPage } from 'react-full-page'
import { contractAbi, contractAddress } from '../config'

import addresses from "../whitelist.json"

import './App.css'

const Login = () => {

  const [chainId, setChainId] = useState(null);
  const [method, setMethod] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);
  const [balance, setBalance] = useState(0);
  const [tokens, setTokens] = useState([]);
  const [ walletAccount, setWalletAccount ] = useState('')
  const [ isConnected, setIsConnected ] = useState(false)
  let [mintNum, setMintNum] = useState(1);
  const api = "https://supbirds.com/meta/";

  const handleConnectWallet = async () => {

    console.log('Connecting MetaMask...')

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
    
    console.log('Account: ', account)
    setWalletAccount(account)
    setIsConnected(true)
    console.log(addresses)
    let item = addresses.find(a => a.address == account);
    
    if (item) {
        console.log(item.id);
        localStorage.setItem("targetAddress", item.address);
        window.location.pathname = "./main"
    }
    else {
      alert("You are not on whitelist.");
    }
  }
  useEffect(async () => {
    
  }, []);

  return (
    <FullPage controls={true}>
      <div className="main-component">
        <header className="header-component">
          5&#176;12'39.6
        </header>
        <div className="login-content">
          <div>You must own a AZDAOCode NFT</div><br></br>
          <div>Connect your wallet to log in</div><br></br>
          <div>
            <button className='connect-button' id="connectButton" onClick={() => handleConnectWallet()}>CONNECT</button>
          </div><br></br>
          <div>Or enter your invitation code</div>
          <div>
            <input className='input-invitecode'></input>
          </div><br></br>
          <div>
            <button className='enter-button'>ENTER</button>
          </div>
          <br></br>
          <div>
            -WhiteList-<br></br>
            Login to redeem your Free AZDAOCode NFT
          </div>
          <div className='parent'>
            <div className='whitelist-area' >
            <div className="users">
              {addresses.map((user) => (
                <div className="user" key={user.id}>{user.address}</div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </FullPage>
  )
}

export default Login
