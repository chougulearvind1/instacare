/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/*  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
         <nav className="navbar_navigation__gxZGc navbar navbar-expand-xxl navbar-light fixed-top">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image
            alt="insta care Logo"
            fetchPriority="high"
            width={150}
            height={46}
            decoding="async"
            src={logo}
            style={{ color: "transparent" }}
          />
        </Link>

        {/* Toggler Button */}
        <button
          aria-controls="offcanvasNavbar-expand-xxl"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Content */}
        <div
          id="offcanvasNavbar-expand-xxl"
          className="offcanvas offcanvas-end"
          aria-labelledby="offcanvasNavbarLabel-expand-xxl"
        >
          <div className="offcanvas-header">
            <div
              className="offcanvas-title h5"
              id="offcanvasNavbarLabel-expand-xxl"
            >
              <Image
                alt="Doctor 360 Logo"
                fetchPriority="high"
                width={150}
                height={46}
                decoding="async"
                src={''}
                style={{ color: "transparent" }}
              />
            </div>
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <div className="justify-content-end flex-grow-1 pe-3 navbar-nav">
              {/* Navigation Links */}
              <Link
                href="/"
                className="navbar_navItem__52jex navbar_navItemActive__lASh4 nav-link"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="navbar_navItem__52jex nav-link"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="navbar_navItem__52jex nav-link"
              >
                Contact Us
              </Link>
              <Link
                href="https://diagnostics.doctor360.in"
                className="navbar_navItem__52jex nav-link"
              >
                Book Lab Tests
                <span className="ant-badge ant-badge-not-a-wrapper css-14wwjjs">
                  <sup
                    data-show="true"
                    className="ant-scroll-number ant-badge-dot"
                    style={{ marginTop: "-10px", right: "0px" }}
                  ></sup>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
      
    </div>
  );
}
