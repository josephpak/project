/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
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
    <>
        <body
          style={{
            // border: `5px solid orange`,            
            fontFamily: `Lora`,
            display: `flex`,
            background: "#28292c",
            width: `100%`,
            height:  `100%`,
            color: `#DFE3E6`,
            flexDirection: `column`
          }}
        >
          <main
            style={{
              // border: `5px solid brown`              
              margin: `240px 150px`,
              background: "#28292c",
            }}
          >{children}</main>
        </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
