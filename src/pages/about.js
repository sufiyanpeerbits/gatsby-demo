import React from "react"
import { Link } from "gatsby"

import CircleIconSecton from "../components/CircleIconBox"

import FooterContactForm from "../components/FooterContactForm"

import ClientLogo from "../components/ClientLogoSection"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeData } from "../Data/AboutData"

class AboutPage extends React.Component {
  state = {
    topTitle: HomeData.filter( item => item.id === 1 ),
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="section py-5 top-banner-pattern" style={{ background: `url(../../assets/images/top-banner-pattern.png) no-repeat` }}>
          <div className="container">
            <div className="text-center max-width-800">
              <h1>{this.state.topTitle[0].title}</h1>
              <Link to="/" className="btn-primary">
                Request a quote{" "}
                <i className="fa-chevron-right fas button-icon-right"></i>
              </Link>
            </div>
            <div className="my-5">
              <img src={this.state.topTitle[0].img} />
            </div>
          </div>
        </div>
        {/* Multicolor box */}
        {HomeData.length !== 0 && HomeData.map((item, index) => {
          return item.id === 2 ? (
            <CircleIconSecton key={index} {...item} />
          ) : null
        })}
        {/* <CircleIconBox /> */}                
        {HomeData.length !== 0 && HomeData.map((item, index) => {
          return item.id === 3 ? (
            <ClientLogo key={index} {...item} />
          ) : null
        })}
        <FooterContactForm />
      </Layout>
    )
  }
}

export default AboutPage
