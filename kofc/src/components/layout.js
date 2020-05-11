import React from "react"  
import PropTypes from "prop-types"

import Nav from "./nav"

import Seo from "./seo"

const Layout = ({}) => {  
  return (
    <>
      <Seo />
      <main></main>
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout  