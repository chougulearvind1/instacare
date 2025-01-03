import React, { createContext, useCallback, useContext, useReducer } from 'react'
const InitialState={
    Balance:0,
     Transaction:['']//adding transaction history
}



const walletReducer =() => {
  switch (action.type) {

  case 'AddBalance':
    state.Balance+=action.payload
    return state

  default:
    return state
  }
}

const WalletProvider=({children}) => {
    
    const [state,dispatch]=useReducer(walletReducer,InitialState)
    const AddBalance = useCallback((item) => {
        dispatch({type:'AddBalance',payload:item})
      },
      []
    )
     return (<WalletContext.Provider value={{state,AddBalance}}>{children}</WalletContext.Provider>)
      
    }
const WalletContext=createContext(InitialState);
const useWallet=() => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('usewallet must be used within a CartProvider');
      }
    return context
}
export {WalletContext,useWallet}
export default WalletProvider