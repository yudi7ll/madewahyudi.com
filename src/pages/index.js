import React from "react"

// Common Components
import { Header, Layout, Seo } from "components/common"

// Landing Components
import {
  About,
  Contact,
  Footer,
  Intro,
  Portfolio,
  Resume,
} from "components/landing"

// global styles
import "components/styles/globals.scss";

const IndexPage = () => (
  <Layout>
    <Seo title="Yudi" />
    <Header />
    <Intro />
    <About />
    <Resume />
    <Portfolio />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
