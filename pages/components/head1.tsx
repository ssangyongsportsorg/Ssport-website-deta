"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
export default function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

<Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          返回官網
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact">
          聯繫客服
        </Navbar.Link>
        <Navbar.Link href="https://support.ssangyongsports.eu.org">查看工單狀態</Navbar.Link>
        <Navbar.Link href="
https://discuss.ssangyongsports.eu.org/">論壇</Navbar.Link>
        <Navbar.Link href="https://status.ssangyongsports.eu.org/">狀態</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

 )
}