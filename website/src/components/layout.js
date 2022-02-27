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
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <div
        className="text-body"
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
            className="intro"
          >I’m Joe Pak, a product manager and venture capital investor based in San Francisco.</p>
          <p
            className="links"
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
