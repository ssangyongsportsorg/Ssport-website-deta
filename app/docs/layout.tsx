import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import { Nav } from "next-docs-ui/nav";
import 'next-docs-ui/style.css'
import Head1 from '../pages/components/head1';
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
 <div>
  <Head1 />
    {children}
  
</div>
  )
}
