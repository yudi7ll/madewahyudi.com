import React from "react"
import { Layout, Seo } from "components/common"

export default () => (
  <Layout>
    <Seo title="404 Not Found" />
    <div className="p-5">
      <h1><span className="color--red">404</span>: NOT FOUND</h1>
      <p>You just hit the route that doesn't exist... :(</p>
    </div>
  </Layout>
);
