"use client";


import React, {  useState}   from 'react'
import {
  Dialog,
  Button,
  Input,
  Typography,
  IconButton,
  Card,
  Tooltip,
} from "@material-tailwind/react";

import { MyDatePicker } from './DatePick';
import { X, Facebook, Instagram } from 'iconoir-react';
import { Doctor } from './Doctors';



interface bookingProp{
  data: Doctor
} 

const Booking: React.FC<bookingProp> = ({data}) => {
    const TimeSlot :string[ ]=['10.00 am','11.00 am','1:00 pm','2:00 pm','3:00 pm']
    
    const [SelectedSlot, setSelectedSlot] = useState("")
     console.dir(data);
    return (
      <Dialog size="lg"open={data != null &&  Object.keys(data).length > 0}>
     
      <Dialog.Overlay>
        <Dialog.Content>
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="secondary"
            className="absolute right-2 top-2"
            isCircular
          >
            ❌
          </Dialog.DismissTrigger>
          <div className='flex content-center justify-around'>
               <div>
               <Card className="max-w-xs">
      <Card.Header
        as="img"
        src={data.dr_img}
        alt="profile-picture"
      />
      <Card.Body className="text-center">
        <Typography type="h5">{data?.name}</Typography>
        <Typography className="my-1 text-foreground">
          {data?.specialization}
        </Typography>

      </Card.Body>
      <Card.Footer className="flex items-center justify-center gap-1">
        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <X className="h-3.5 w-3.5" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <Facebook className="h-4 w-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Like
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <Instagram className="h-4 w-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Card.Footer>
    </Card>
               </div>
               <div className='w-5/12 p-4'>
           <Typography type="h5" className="mb-1">
           Book an Appointment with
          </Typography>
  
          
  
          <form action="#" className="mt-2">
            <div className="mb-4 mt-2 space-y-1.5">

              <Typography
                as="label"
                htmlFor="email"
                type="small"
                color="default"
                className="font-semibold"
              >
                Email
              </Typography>
  
              <Input
                id="email"
                type="email"
                placeholder="someone@example.com"
              />
            </div>
            <div>
            <Typography
                as="label"
                htmlFor="fname"
                type="small"
                color="default"
                className="font-semibold"
              >
                Full Name
              </Typography>
  
              <Input
                id="fname"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
            <Typography
                as="label"
                htmlFor="mob_no"
                type="small"
                color="default"
                className="font-semibold"
              >
                Mobile
              </Typography>
  
              <Input
                id="fname"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
            
            <Typography
                as="label"
                htmlFor="date"
                type="h5"
                color="default"
                className="font-semibold m-4"
              >
                Choose Preffered Date and Time Slot
              </Typography>
              <div className='flex justify-around content-center'>
                <div>
                   {                MyDatePicker()                 }
                </div>
                <div>
                      {TimeSlot.map((slot:string, index:number) => (
                                      <div
                                        key={index}
                                        className={`mt-2 px-4 py-2 rounded-lg cursor-pointer transition-all 
                                          ${SelectedSlot === slot ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}
                                          hover:${SelectedSlot === slot ? "bg-blue-600" : "bg-gray-300"}`}
                                        onClick={() => setSelectedSlot(slot)}
                                      >
                                        {slot}
                                      </div>
                                    ))
                                  }
                </div>
              </div>
  

            <Button isFullWidth> Book Now </Button>
          </form>

          </div>
        </div>
  
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
      );
}

export default Booking
