/* eslint-disable @next/next/no-html-link-for-pages */



import Header from './Component/Header';
import Intro from './Component/Intro';
import Doctors from './Component/Doctors';
import "react-day-picker/style.css";
import WalletProvider, { ClientProvider } from './Component/wallet/Wallet';


export default function Home() {
  return (
    <div>
      
     <WalletProvider>
      <Header></Header>
      <Intro></Intro>
      
        <Doctors></Doctors>
       </WalletProvider> 
     
      
    </div>
  );
}
