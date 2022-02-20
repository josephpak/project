import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#28292c`,
      border: `5px solid red`
    }}
  >
      <h1 style={{ 
        margin: `0 auto`,
        maxWidth: 960,
        border: `5px solid green`,
        color:`#DFE3E6`,
        fontFamily:`Lucida Grande`
        }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
