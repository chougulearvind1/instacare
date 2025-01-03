"use client"
import React, { createContext, useCallback, useContext, useReducer } from 'react'
const InitialState={
    Balance: 0,
     Transaction:['']//adding transaction history
}

const Client={
  Name:'',mobile_no:'',Email:'',appointment_time:'',appoint_dr:'',transaction:''
}

const walletReducer =(state,action) => {
  switch (action.type) {

  case 'AddBalance':
    
    state.Balance=state.Balance+action.payload
    console.log('add balance is called swithc' ,state.Balance);
    return state

  default:
    return 'type not matched '
  }
}
const ClientRedcucer =(state,action) => {
  switch (action.type) {

  case 'save_data':
    console.log(state);
    return state

  default:
    return 'type not matched '
  }
}
const WalletProvider=({children}) => {
    
    const [state,dispatch]=useReducer(walletReducer,InitialState)
    const AddBalance = useCallback((item) => {
        console.log('dispatching for addbalance');
        dispatch({type:'AddBalance',payload:item})
      },
      []
    )
     return (<WalletContext.Provider value={{state,AddBalance}}>{children}</WalletContext.Provider>)
      
    }
    const ClientProvider=({children}) => {
    
      const [state,dispatch]=useReducer(ClientRedcucer,Client)
      const save_data = useCallback((item) => {
          dispatch({type:'save_data',payload:item})
        },
        []
      )
       return (<ClientContext.Provider value={{state,save_data}}>{children}</ClientContext.Provider>)
        
      }
const WalletContext=createContext();
const ClientContext=createContext();

const useWallet=() => {
    const context = useContext(WalletContext);
    console.log('usewallet is called' ,context);
    if (context === undefined) {
        throw new Error('usewallet must be used within a CartProvider');
      }
    return context
}
const useClient=() => {
  const context = useContext(ClientContext);
  if (context === undefined) {
      throw new Error('usewallet must be used within a CartProvider');
    }
  return context
}
export {WalletContext,useWallet,ClientContext,useClient,ClientProvider}
export default WalletProvider