import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import { Nav } from "next-docs-ui/nav";
import 'next-docs-ui/style.css'
import Head1 from '../../pages/components/head1';
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
 <div>
<DocsLayout
    
    tree={tree}
    nav={{
      component: (
        <Nav
          title={<>雙龍體育幫助中心</>}
          enabled="false"
          
          items={[{ href: "/", children: "返回官網" }]}
        />
      ),
    }}
  >
  <Head1 />
    {children}
    </DocsLayout>
</div>
  )
}
