import { useState, useEffect } from 'react';
import { Navbar } from "flowbite-react";
import Login from "./login";
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react"
import { Session } from "next-auth"
import { DocSearch } from '@docsearch/react'
import '@docsearch/css';

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const session = useSession();
  useEffect(() => {
    window.addEventListener('resize', () => {
      setCollapsed(window.innerWidth < 992);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setCollapsed(window.innerWidth < 992);
      });
    }
  }, []);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <header>
        <Navbar
          fluid={true}
          rounded={true}
          className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        >
          <Link href="/">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="ssport Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
            <Login />
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <a
              href="https://slb.ssangyongsports.org"
              className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              SLB
            </a>
            <a href="https://sba.ssangyongsports.org" className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
              SBA
            </a>
            <Link href="/support" passHref={true} className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
              幫助中心
            </Link>
            <Link href="/p" passHref={true} className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
              隱私政策
            </Link>
            <Link href="/t" passHref={true} className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
              服務條款
            </Link>
            <Link href="/blog" passHref={true} onClick={() => setMobileMenuOpen(false)} className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
              部落格
            </Link>
            <Link href="/contact" passHref={true} className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
              聯繫
            </Link>
            <a href="https://status.ssangyongsports.org" className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
              狀態
            </a>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <br />
      <br />
    </>
  )
}
