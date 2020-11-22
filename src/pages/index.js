import React from "react"

// Common Components
import { Layout, Seo } from "components/common"

// Landing Components
import { About, Intro, Portfolio, Resume } from "components/landing"

// global styles
import "components/styles/globals.scss";

const IndexPage = () => (
  <Layout>
    <Seo title="Yudi" />
    <Intro />
    <About />
    <Resume />
    <Portfolio />
  </Layout>
)

export default IndexPage
