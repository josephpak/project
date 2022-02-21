import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout
  >
    <Seo title="Home" />
    <h1>New Header</h1>
    <p>Add a secondary Header.</p>
    <p>Now go build something great.</p>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p
      style={{
        fontFamily: `Lucida Grande`,
        fontSize: `15px`,
    }}
    >
      <Link style={{ color: '#3B9DDD' }} to="/page-2/">Go to page 2</Link> <br />
      <Link style={{ color: '#3B9DDD' }} to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link style={{ color: '#3B9DDD' }} to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link style={{ color: '#3B9DDD' }} to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
