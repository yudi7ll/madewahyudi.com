import React from "react";

// Common Components
import { Header, Layout, Seo } from "components/common";

// Landing Components
import { Contact, Footer, Intro, MyTools, Portfolio } from "components/landing";

// global styles
import "components/styles/globals.scss";

const IndexPage = () => (
  <Layout>
    <Seo title="Yudi" />
    <Header />
    <Intro />
    <Portfolio />
    <MyTools />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
