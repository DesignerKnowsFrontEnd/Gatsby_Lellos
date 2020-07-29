/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"


import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"


const Layout = ({ children }) => {

 // const { title } = data.wordpress.generalSettings
  

  return (
    <>
      <Header/>
        
          {children}
       
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
