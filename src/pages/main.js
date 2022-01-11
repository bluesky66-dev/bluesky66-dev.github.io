import React from 'react'
import { useEffect, useState } from 'react'
import Web3 from "web3"
import { FullPage } from 'react-full-page'
import { contractAbi, contractAddress } from '../config'

import addresses from "../whitelist.json"

import './App.css'
import { AccountTree } from '@material-ui/icons'

const Main = () => {
  const [ amount, setAmount ] = useState(1);
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
  const [ showAddress, setShowAddress ] = useState('')
  const [ isConnected, setIsConnected ] = useState(false)
  let [mintNum, setMintNum] = useState(1);
  const api = "https://supbirds.com/meta/";

  const increase = () => {
    if(amount < 25 ) {
      setAmount(amount + 1)
    }    
  }
   const decrease = () => {
    if(amount > 1 ) {
      setAmount(amount - 1)
    }    
  }

  useEffect(async () => {
    alert("You can access to MINT successfully.");
    const temp = localStorage.getItem("targetAddress").toString();
    const pre = temp.substring(0,6);
    const suf = temp.substring(36, 40);
    setShowAddress(pre+"********"+suf);
  }, []);

  return (
    <FullPage controls={true}>
      <div className="main-component">
        <header className="header-component">
          3&#176;12'43.2
        </header>
        <div className="login-content">
          <div>Welcome { showAddress }</div><br></br>
          <div>You own 0/25 AZDAOCode NFTs</div><br></br>
          <div>Redeem 0 new AZDAOCode NFTs</div>
          <div>
            <button className='redeem-button' id="redeemButton">REDEEM</button>
          </div><br></br>
          <div>Invitation code:</div>
          <div>Mint 1 AZDAOcode NFT to</div>
          <div>get your invitation code</div>
            <br></br>
          <div>Each invite that mint -</div>
          <div>Redeem Free AZDAOcode NFT</div>
          <br></br>
          <div>Mint AZDAOcode NFT</div>
          <div className="payment-count">
            <div className="btn-group">
                <div>
                    <button onClick={()=> decrease()}>-</button>
                </div>
                <div>
                    {amount}
                </div>
                <div>
                    <button onClick={()=> increase()}>+</button>
                </div>
            </div>
          </div>
          <div>0.1 eth</div>
          <div>
            <button className='enter-button'>MINT</button>
          </div>
          <br></br>

        </div>
      </div>
    </FullPage>
  )
}

export default Main
