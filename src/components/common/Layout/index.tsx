import React, { ReactNode } from 'react'
import Head from '../Head'
import './styles.scss'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Head title="Yudi" />
    <main>{children}</main>
  </>
)

export default Layout
