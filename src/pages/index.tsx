import React from 'react'
import {
  Contact,
  Footer,
  Intro,
  MyTools,
  Portfolio,
} from '../components/landing'

import { PageProps } from 'gatsby'
import { Head } from '../components/common'
import '../styles/globals.scss'

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Head />
    <main>
      <Intro />
      <Portfolio />
      <MyTools />
      <Contact />
      <Footer />
    </main>
  </>
)

export default IndexPage
