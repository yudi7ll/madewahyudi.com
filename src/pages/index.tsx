import React from 'react'
import {
  Contact,
  Footer,
  Intro,
  MyTools,
  Portfolio,
} from '../components/landing'

// global styles
import '../components/styles/globals.scss'
import { PageProps } from 'gatsby'
import { Head } from '../components/common'

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
