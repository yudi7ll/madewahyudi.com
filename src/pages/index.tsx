import React from 'react'
import { Layout, Seo } from '../components/common'
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

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title="Yudi" />
    <Intro />
    <Portfolio />
    <MyTools />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
