/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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
    <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            border: `5px solid white`,
            background: "#28292c",
            height:  `auto`,
            paddingBottom: `150px`,
            color: `#DFE3E6`,
            fontFamily:`Lucida Grande`
          }}
        >
          <main
            style={{
              background: "#28292c",
              margin: `0 auto`,
              maxWidth: 960,
              padding: `15px 15px`,
              border: `5px solid brown`
            }}
          >{children}</main>
          <footer
            style={{
              background: "#28292c",
              margin: `0 auto`,
              maxWidth: 960,
              fontFamily: `Lucida Grande`,

              border: `5px solid purple`
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a style={{ color: '#3B9DDD' }} href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
