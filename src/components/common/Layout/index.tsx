import React, { ReactNode } from 'react'
import './styles.scss'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Anton&display=swap"
      rel="stylesheet"
    />
    {/* eslint-disable-next-line react/no-danger */}
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script async defer src="https://www.googletagmanager.com/gtag/js?id=G-LNZQGS8EKR" />
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LNZQGS8EKR');
          </script>
          `,
      }}
    />
    <main>{children}</main>
  </>
)

export default Layout
