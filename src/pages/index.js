import React from "react"

// Common Components
import { Layout } from "components/common";
import { Seo } from "components/common";

// Landing Components
import { Intro } from 'components/landing';

const IndexPage = () => (
  <Layout>
    <Seo title="Yudi" />
    <Intro />
  </Layout>
)

export default IndexPage
