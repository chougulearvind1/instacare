"use client";


import React, {  Dispatch, SetStateAction, useState}   from 'react'
import {
  Dialog,
  Button,
  Input,
  Typography,
  IconButton,
  Card,} from "@material-tailwind/react";
import { Doctor } from './Doctors';
import DatePick from './DatePick';
import {  useWallet } from './wallet/Wallet';
interface bookingProp{
  data: Doctor
  close:Dispatch<SetStateAction<boolean>>
} 
const Booking: React.FC<bookingProp> = ({data,close}) => {
    const TimeSlot :string[ ]=['10.00 am','11.00 am','1:00 pm','2:00 pm','3:00 pm']
    const [step, setStep] = useState(0);
    const [SelectedSlot, setSelectedSlot] = useState("")
     const {state,AddBalance}=useWallet()
   
    console.log(state.Balance,'balance',AddBalance(5));
    return (
      <Dialog size="md"open={data != null &&  Object.keys(data).length > 0} >
     
      <Dialog.Overlay>
        <Dialog.Content>
          <Dialog.DismissTrigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="secondary"
            className="absolute right-2 top-2"
            isCircular
            onClick={() => { close(false)}}
          >
            ❌
          </Dialog.DismissTrigger>
          <div className='flex content-center justify-around '>
               <div>
               <Card >
      <Card.Header as="img" src={data.dr_img}   alt="profile-picture" className='aspect-w-5 aspect-h-3'/>
      <div className="mb-2 flex items-center justify-between">
          <Typography type="lead">Consultancy Fee</Typography>
          <Typography type="lead">100.00</Typography>
        </div>
      <Card.Body className="text-center">
        <Typography type="h5">{data?.name}</Typography>
        <Typography className="my-1 text-foreground">
          {data?.specialization}
        </Typography>
        <Typography type="h4">⭐{data.rating}</Typography>
        <span className="itemcenter text-orange-950 font-semibold" ></span>
        <div className="mb-2 flex items-center justify-between">
          <Typography type="lead">Clinic Name:</Typography>
          <Typography type="lead">{data.clinicName}</Typography>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Typography type="lead">Clinic Address:</Typography>
          <Typography type="lead">{data.clinicAddress}</Typography>
        </div>
      </Card.Body>
     
    </Card>
               </div>
               <div className='w-5/12 p-4'>
           <Typography type="h5" className="mb-1">
           Book an Appointment with Dr. {data.name}
          </Typography>
         
      {step===0 &&   <form action="#" className="mt-2">           
            <div> 
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
                className="font-semibold mb-2"
              />
            </div>
             <Typography as="label"htmlFor="mob_no"type="small"color="default" className="font-semibold">
                Mobile
              </Typography>  
              <Input id="fname" type="text" placeholder="Enter Mobile Number" className="font-semibold mb-2"/>
              <div className="mb-2 mt-2 space-y-1.5">

              <Typography
                as="label"
                htmlFor="email"
                type="small"
                color="default"
                className="font-semibold mb-2"
              >
                Email
              </Typography>
  
              <Input
                id="email"
                type="email"
                placeholder="someone@example.com"
                className="font-semibold mb-2"
              />
            </div>
            <Typography type="small" className="m-4">
           Click Next to Check Doctor avialblity
          </Typography>
              </div>           
            </form>
        }
       {step===1 && <><Typography
                    as="label"
                    htmlFor="date"
                    type="h5"
                    color="default"
                    className="font-semibold m-4"
                  >
                    Choose Preffered Date and Time Slot
                  </Typography><div className='flex justify-around content-center'>
                      <div>
                        {<DatePick></DatePick>}
                      </div>
                      <div>
                        {TimeSlot.map((slot: string, index: number) => (
                          <div
                            key={index}
                            className={`mt-2 px-4 py-2 rounded-lg cursor-pointer transition-all 
                                          ${SelectedSlot === slot ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}
                                          hover:${SelectedSlot === slot ? "bg-blue-600" : "bg-gray-300"}`}
                            onClick={() => setSelectedSlot(slot)}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Typography type="small" className="m-4">
           Click Next to mange Wallet
          </Typography></>
         }
        {step ===2 &&<><Typography type="h5" className="m-4">
                  Wallet
                </Typography>
                <Typography type="lead" className="m-4">
                  Your balance is { }
                </Typography>
                <Button isFullWidth> Book Now</Button>
                </>
        } 
        
 
      <div className="mt-14 flex w-full justify-between gap-4">
        <Button disabled={step === 0} onClick={() => setStep(step - 1)}>
          Previous
        </Button>
        <Button
          variant="solid"
          disabled={step === 2}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </div>   
           

          </div>
        </div>
  
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
      );
}

export default Booking
