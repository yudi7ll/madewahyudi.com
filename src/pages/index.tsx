import React from 'react'
import {
  Contact,
  Footer,
  Intro,
  MyTools,
  Portfolio,
} from '../components/landing'

// global styles
import { PageProps } from 'gatsby'
import { Head } from '../components/common'
import '../styles/globals.scss'

const IndexPage: React.FC<PageProps> = (props) => (
  <>
    <Head />
    <main>
      <Intro />
      <Portfolio {...props} />
      <MyTools />
      <Contact />
      <Footer />
    </main>
  </>
)

export default IndexPage
