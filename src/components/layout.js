/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

// Style css
import "./layout.css"
import "../assets/gt-walsheim/stylesheet.css" // <!-- Custom font style -->
import "../assets/bootstrap/css/bootstrap.min.css" // <!-- Bootstrap CSS -->
import "../assets/font-awesome/css/all.min.css" // <!-- font-awesome Style -->
import "../assets/css/style.css" // <!-- Custom css style -->

// import "../../public/assets/js/jquery-3.2.1.slim.min.js"
// import "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
// import "../../public/assets/bootstrap/js/bootstrap.min.js"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout
