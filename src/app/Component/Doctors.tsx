"use client";


import React,{  useEffect,  useRef, useState } from 'react'
import { TabulatorFull as Tabulator} from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import { createRoot } from 'react-dom/client';
import Image from 'next/image';
import ClickPopup from './ClickPopup';
import Booking from './Booking';
import { Button } from '@material-tailwind/react';









export interface Doctor {
    dr_img:string;
    id: string;
    name: string;
    specialization: string;
    rating: number;
    discount: number;
    clinicName:string;
    clinicAddress:string;
    busySlot:string[]
    
  }
    
const Doctors = () => {
    
    const tableRef = useRef<HTMLDivElement>(null);
    
    const [Profile, setProfile] = useState<Doctor>()
    const [OpenBook, setOpenBook] = useState(false)

        
  
    useEffect(() => {
       // Sample Doctor Data
    const doctors:Doctor[] = [
        { dr_img:"/Dr_Profiles/dr1.jpeg",id: "1", name: " Arvind Chougule", specialization: "Cardiologist", rating: 4.5, discount: 2,clinicName:"lifeline",clinicAddress:"Solapur",busySlot:['']},
        { dr_img:"/Dr_Profiles/dr2.jpeg",id: "2", name: " Jane", specialization: "Dermatologist", rating: 3.8, discount: 3 ,clinicName:"gavade clinic",clinicAddress:"kolhapur",busySlot:['']},
        { dr_img:"/Dr_Profiles/dr2.jpeg",id: "2", name: " Jane", specialization: "Dermatologist", rating: 3.8, discount: 0 ,clinicName:"gavade clinic",clinicAddress:"pandharpur",busySlot:['']},
        { dr_img:"/Dr_Profiles/dr3.jpeg",id: "3", name: " Mike", specialization: "Dentist", rating: 4.2, discount: 1 ,clinicName:"sadgurue clinic",clinicAddress:"tarapur",busySlot:['']},
        { dr_img:"/Dr_Profiles/dr4.jpeg",id: "4", name: " Emily", specialization: "Pediatrician", rating: 5.0, discount: 5 ,clinicName:"sanjivani clinic",clinicAddress:"Solapur",busySlot:['']},
      ];      
      // Initialize Tabulator
      const table = new Tabulator(tableRef.current!, {
        data: doctors, // Assign       
        layout: "fitColumns", // Fit columns to width of table
        responsiveLayout: "collapse", // Hide columns that don't fit
        initialSort: [{ column: "rating", dir: "desc" }], // Sort by rating descending by default
        columns: [
          { title: "ID", field: "id", sorter: "number", width: 50,cellClick:() => {
            console.log("cell click");
            return <ClickPopup></ClickPopup>
          },},
          {
            title: "Image",
            field: "dr_img",
            cssClass:"h-full",
            formatter: (cell) => {
              const container=document.createElement("div")
              const root = createRoot(container);
              root.render(<Image src={cell.getValue()} alt='dr' layout="fill" sizes='100%' style={{width:'100%',height:'100%'}} className='object-cover object-center rounded-full '/>)
              console.log(container,'container');
              return container;
            },
            width:60,
            
          },
          { title: "Name", field: "name", sorter: "string", headerFilter: "input",minWidth:110, widthGrow:2 , cssClass:'!text-left !whitespace-normal !break-words leading-relaxed',
            formatter:(cell) =>{
              const container=document.createElement("div")
              const root = createRoot(container);
              root.render(<h5  className="itemcenter   tracking-tight text-black dark:text-white mb-4 "> Dr.{cell.getValue()} </h5>)
              console.log(container,'container');
              return container;
            } 
           },
          { title: "Specialization", field: "specialization", sorter: "string", headerFilter: "input",maxWidth:150,
            formatter:(cell) => {
              const container=document.createElement("div")
              const root = createRoot(container);
              root.render(<h6  className=" itemcenter  tracking-tight text-black dark:text-white mb-4  "> {cell.getValue()} </h6>)
              console.log(container,'container');
              return container;
            } 
          },
          { title: "Rating",  field: "rating",sorter: "number",width:100,cssClass:'!whitespace-normal !break-words leading-relaxed',
              formatter: (cell) =>  {
                const container=document.createElement("div")
                const root = createRoot(container);
                root.render(<span className="itemcenter text-orange-950 font-semibold" >⭐{cell.getValue()}</span>)
                console.log(container,'container');
                return container;
              } 
          },
          {
            title: "Discount",
            field: "discount",
            sorter: "number", 
            cssClass:'!whitespace-normal !break-words leading-relaxed',
            formatter: (cell) => {
              const container=document.createElement("div")
              const root = createRoot(container);
              root.render(<span className="itemcenter text-green-700 font-semibold" >{cell.getValue()}%</span>)              
              return container;
            } ,
           
          },
          { title: "Clinic Name", field: "clinicName",headerFilter: "input",  maxWidth:150 ,formatter: (cell) => {
            const container=document.createElement("div")
            const root = createRoot(container);
            root.render(<span className="itemcenter text-blue-600 font-semibold" >{cell.getValue()}</span>)
            console.log(container,'container');
            return container;
          } ,
        },
          { title: "Location", field: "clinicAddress", maxWidth: 250 ,headerFilter: "input",
            formatter: (cell) => {
              const container=document.createElement("div")
              const root = createRoot(container);
              root.render(<span className="itemcenter text-violet-700 font-semibold" >{cell.getValue()}</span>)
              console.log(container,'container');
              return container;
            } ,
          },
          
          {
            title: "Book Now",
            formatter:()=> {
              const container=document.createElement("div")
              const root = createRoot(container);
              root.render(<Button className="itemcenter btn-action" size='sm'color='primary' variant='gradient'isPill>Book Now</Button>)
              return container;
            },
            
            cellClick: (e,cell) => {
              const rowdata:Doctor= cell.getData()as Doctor
              if ((e.target as HTMLElement).classList.contains("btn-action")) {
                e.stopPropagation();
              } 
              setOpenBook(true)
              console.log(rowdata.name,'row')
              setProfile(rowdata);
              

            },
            
           
        },
        ],
        rowFormatter:(row) => { 
          
          const rowElement = row.getElement()
          rowElement.style.height = "60px";
          
          
          
         },
         autoResize:true,
         
         columnDefaults:{
           tooltip:() => { 
            
            return "Click or Tap to see Deoctor Profile";
            },
          
         },
        rowClickPopup: "<div>doctor profile will develop  Later</div>"
        
         
         
      });
     
      return () => {
        // Cleanup Tabulator 
        table.destroy()
        
      };
    }, [])
  
    return <><div ref={tableRef}></div>
     { OpenBook && Profile!=undefined && <Booking data={Profile} close={setOpenBook} ></Booking>}
    <style>
      {`
      .tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title {
        white-space:normal;
       }
       .itemcenter{position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
       `}
      
    </style></>
}

export default Doctors