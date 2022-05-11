import React from 'react';

// Common Components
import { Layout, Seo } from 'components/common';

// Landing Components
import {
  Contact, Footer, Intro, MyTools, Portfolio,
} from 'components/landing';

// global styles
import 'components/styles/globals.scss';

const IndexPage = () => (
  <>
    <canvas id="ParticleCanvas" styles="position: absolute; top: 0; bottom: 0; left: 0; right: 0;" />
    <Layout>
      <Seo title="Yudi" />
      <Intro />
      <Portfolio />
      <MyTools />
      <Contact />
      <Footer />
    </Layout>
  </>
);

export default IndexPage;
