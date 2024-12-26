"use client";


import React, {  useMemo, useRef } from 'react'
import {TabulatorFull as Tabulator} from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import { createRoot } from 'react-dom/client';
import Image from 'next/image';




interface Doctor {
    dr_img:string;
    id: string;
    name: string;
    specialization: string;
    rating: number;
    discount: boolean;
  }
    
const Doctors = () => {
    const tableRef = useRef<HTMLDivElement>(null);

   
  
    useMemo(() => {

       // Sample Doctor Data
    const doctors:Doctor[] = [
        { dr_img:"/Dr_Profiles/dr1.jpeg",id: "1", name: "Dr. Smith", specialization: "Cardiologist", rating: 4.5, discount: true },
        { dr_img:"/Dr_Profiles/dr2.jpeg",id: "2", name: "Dr. Jane", specialization: "Dermatologist", rating: 3.8, discount: true },
        { dr_img:"/Dr_Profiles/dr3.jpeg",id: "3", name: "Dr. Mike", specialization: "Dentist", rating: 4.2, discount: false },
        { dr_img:"/Dr_Profiles/dr4.jpeg",id: "4", name: "Dr. Emily", specialization: "Pediatrician", rating: 5.0, discount: true },
      ];

      // Initialize Tabulator
      const table = new Tabulator(tableRef.current!, {
        data: doctors, // Assign data
        layout: "fitColumns", // Fit columns to width of table
        responsiveLayout: "hide", // Hide columns that don't fit
        initialSort: [{ column: "rating", dir: "desc" }], // Sort by rating descending by default
        columns: [
          { title: "ID", field: "id", sorter: "number", width: 50 },
          {
            title: "Image",
            field: "dr_img",
            formatter: (cell) => {
              const container=document.createElement("div")
              const root = createRoot(container);
              root.render(<Image src={cell.getValue()} alt='dr'width={150} height={150}/>)
              console.log(container,'container');
              return container;
            },
            width:150,
            
          },
          { title: "Name", field: "name", sorter: "string", headerFilter: "input" },
          { title: "Specialization", field: "specialization", sorter: "string", headerFilter: "input" },
          { title: "Rating",  field: "rating",sorter: "number",
              formatter: (cell) => {
              const rating = cell.getValue()
              return `<span style="color: gold; font-weight: bold;">⭐${rating}</span>`
            },
          },
          {
            title: "Discount Available",
            field: "discount",
            sorter: "boolean",
            formatter: "tickCross",
            editor: true,
          },
        ],
        rowFormatter:(row) => { 
          const rowElement = row.getElement();
          rowElement.style.height = "80px"; // Increase row height
         }
         
      });
  
      return () => {
        // Cleanup Tabulator instance
        table.destroy();
      };
    }, []);
  
    return <div ref={tableRef}> </div>
}

export default Doctors