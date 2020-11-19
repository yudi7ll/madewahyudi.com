import React from "react"

// Common Components
import { Layout } from "components/common";
import { Seo } from "components/common";

// Landing Components
import {
  About,
  Intro,
} from 'components/landing';

const IndexPage = () => (
  <Layout>
    <Seo title="Yudi" />
    <Intro />
    <About />
  </Layout>
)

export default IndexPage
