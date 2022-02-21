/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        fontFamily: `Lora`,
        color: `#DFE3E6`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          width: `100%`,
        }}
      >
        <p
          style={{
            fontSize: `32px`
          }}
        >Hello!</p>
        <div>
          <p
            style={{
              width: `500px`,
              fontSize: `30px`,
            }}
          >I’m Joe Pak, a product manager and venture capital investor based in San Francisco.</p>
          <p
            style={{
              fontSize: `30px`,
              display: `flex`,
              justifyContent: `space-between`,
              width: `500px`,
              paddingTop: `40px`
          }}
          >
            {/* <Link to="/page-2/">about me</Link> <br /> */}
            <Link to="https://www.linkedin.com/in/josephjpak" target="_blank">linkedin</Link> <br />
            <Link to="mailto:josephpak2014@gmail.com">contact me</Link> <br />
          </p>
        </div>

      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
