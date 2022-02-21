import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/lora"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div
    style={{
    padding: `100px 175px`
    }}
  >
    <Layout
    >
      <Seo title="Home" />
      
      
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
