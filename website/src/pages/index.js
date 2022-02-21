import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/lora"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout
  >
    <Seo title="Home" />
    <div
      style={{
        // border: `3px solid blue`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
      <p
        style={{
          // border: `3px solid pink`,
          fontSize: `32px`
        }}
      >Hello!</p>
      <div>
        <p
          style={{
            // border: `3px solid purple`,
            width: `500px`,
            fontSize: `30px`,
          }}
        >I’m Joe Pak, a product manager and venture capital investor based in San Francisco.</p>
        <p
          style={{
            // border: `1px solid green`,            
            fontFamily: `Lora`,
            fontSize: `30px`,
            display: `flex`,
            justifyContent: `space-between`,
            width: `500px`,
            paddingTop: `40px`
        }}
        >
          <Link style={{ color: '#3B9DDD' }} to="/page-2/">about me</Link> <br />
          <Link style={{ color: '#3B9DDD' }} to="https://www.linkedin.com/in/josephjpak" target="_blank">linkedin</Link> <br />
          <Link style={{ color: '#3B9DDD' }} to="mailto:josephpak2014@gmail.com">contact me</Link> <br />
        </p>
      </div>

    </div>
    
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    
  </Layout>
)

export default IndexPage
