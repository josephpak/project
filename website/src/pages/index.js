import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/lora"
import { Helmet } from 'react-helmet';

import Layout from "../components/layout.js"
import Seo from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  <div
    className="main"
  >
    <Layout
    >
      <Seo title="Home" />
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      
    </Layout>
  </div>
  
)

export default IndexPage
