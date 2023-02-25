import React from 'react'
import { Head } from '../components/common'
import '../styles/globals.scss'

const NotFound = () => (
  <>
    <Head title="404 Not Found" />
    <main className="absolute inset-0">
      <div className="p-5">
        <h1>
          <span className="color--red">404</span>
          <span>: NOT FOUND</span>
        </h1>
        <p>You just hit the route that doesn&apos;t exist... :(</p>
      </div>
    </main>
  </>
)

export default NotFound
