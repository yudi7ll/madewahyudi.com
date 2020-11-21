import React from "react"

// Common Components
import { Layout, Seo } from "components/common";

// Landing Components
import {
  About,
  Intro,
  Resume,
} from 'components/landing';

const IndexPage = () => (
  <Layout>
    <Seo title="Yudi" />
    <Intro />
    <About />
    <Resume />
  </Layout>
);

export default IndexPage;
