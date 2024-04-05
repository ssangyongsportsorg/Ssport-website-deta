"use client";
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { Navbar } from "flowbite-react";
export default function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

<Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/support">
                   <img className="h-8 w-auto" src="/logo.png" alt="" />
        
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/"  onClick={() => setMobileMenuOpen(false)}>
  返回官網
</Navbar.Link>
<Navbar.Link as={Link} href="/contact" onClick={() => setMobileMenuOpen(false)}>
  聯繫客服
</Navbar.Link>
<Navbar.Link href="https://support.ssangyongsports.eu.org" onClick={() => setMobileMenuOpen(false)}>
  查看工單狀態
</Navbar.Link>
<Navbar.Link href="https://discuss.ssangyongsports.eu.org/" onClick={() => setMobileMenuOpen(false)}>
  論壇
</Navbar.Link>
<Navbar.Link href="https://status.ssangyongsports.eu.org/" onClick={() => setMobileMenuOpen(false)}>
  狀態
</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

 )
}