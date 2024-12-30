/* eslint-disable @next/next/no-html-link-for-pages */


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Intro from './Component/Intro';
import Doctors from './Component/Doctors';

<link  rel="stylesheet"  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"/>


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      
        <Doctors></Doctors>
        
      
      
    </div>
  );
}
