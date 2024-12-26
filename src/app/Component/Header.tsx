"use client";
import React from 'react'
import logo from '@/logo.png'


const Header = () => {
    
  return NavbarDemo()
    
  
}




import {  Button,  IconButton,  Typography,  Collapse,  Navbar,} from "@material-tailwind/react";
import Image from 'next/image';
const LINKS = [  {  title: "Homes",    href: "#", },
                 {  title: "About us",  href: "#", },
                 {  title: "contact us",   href: "#",  },
                 {  title: "Book Appointment",    href: "#",  },];
function NavList() {
  return (
    <ul className="mt-1 flex flex-col gap-x-3 gap-y-1.5 md:mt-0 md:flex-row md:items-center">
      {LINKS.map(({  title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 hover:text-primary" >
                            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

 function NavbarDemo() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 450 && setOpenNav(false),
    );
  }, []);
  

  

  return (
    <Navbar className="mx-auto w-full max-w-screen-2xl bg-blue-100">
      <div className="flex items-center md">
        <Typography
          as="a"
          href="#"
          type="small"
          className="ml-2 mr-2 block py-1 font-semibold"
        >
          <Image src={logo} alt='logo' className=' h-14'></Image>
        </Typography>

        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
         { !openNav && <div className='md:flex md:flex-row md:w-full md:justify-between md:items-baseline'>
          <div  className="hidden md:block">
          <NavList />
        </div>
          <div>
            <Button size="sm" className="hidden md:ml-auto md:inline-block">
          Sign In
        </Button>
          </div>
        
         </div> }
        

        <IconButton
          size="sm"
          variant="ghost"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid md:hidden" >
         <svg width="60px" height="60px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.448"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z" fill="#000000"></path> </g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z" fill="#000000"></path> </g></svg>
        </IconButton>
      </div>

      <Collapse open={openNav}   >
        <NavList />
         
        <Button isFullWidth size="sm" className="m-auto">
          Sign In
        </Button>
      </Collapse>
    </Navbar>
  );
}

export default Header;