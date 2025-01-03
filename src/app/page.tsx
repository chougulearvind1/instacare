/* eslint-disable @next/next/no-html-link-for-pages */



import Header from './Component/Header';
import Intro from './Component/Intro';
import Doctors from './Component/Doctors';
import "react-day-picker/style.css";


export default function Home() {
  return (
    <div>
      
      <Header></Header>
      <Intro></Intro>
      
        <Doctors></Doctors>
        
      
      
    </div>
  );
}
