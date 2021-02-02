import React from "react"
import { Link } from "gatsby"

import CircleIconSecton from "../components/CircleIconBox"

import FooterContactForm from "../components/FooterContactForm"

import ClientLogo from "../components/ClientLogoSection"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeData } from "../HomeData"

class IndexPage extends React.Component {
  state = {
    topTitle: HomeData.filter(
      item =>
        item.id === 1 ||
        item.id === 2 ||
        item.id === 3 ||
        item.id === 4 ||
        item.id === 7
    ),
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="section py-5 top-banner-pattern" style={{ background: `url(../../assets/images/top-banner-pattern.png) no-repeat` }}>
          <div className="container">
            <div className="text-center">
              <h1>{this.state.topTitle[0].title}</h1>
              <p>{this.state.topTitle[0].info}</p>
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
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2 className="font-size-60">{this.state.topTitle[1].title}</h2>
                <p>{this.state.topTitle[1].info}</p>
              </div>
              <div className="col-md-7">
                <div className="text-center">
                  <img src={this.state.topTitle[1].img} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2 className="font-size-60">{this.state.topTitle[2].title}</h2>
              </div>
              <div className="col-md-7">
                <p className="mb-0">{this.state.topTitle[2].info}</p>
                <p>{this.state.topTitle[2].info2}</p>
              </div>
            </div>
            <div className="text-center mt-5">
              <img src={this.state.topTitle[2].img} />
            </div>
          </div>
        </div>

        <div className="section bg-light-oreng">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2 className="font-size-60">{this.state.topTitle[3].title}</h2>
              </div>
              <div className="col-md-7">
                <p className="mb-0">{this.state.topTitle[3].info}</p>
                <p>{this.state.topTitle[3].info2}</p>
              </div>
            </div>
            <div className="text-center mt-5">
              <img src={this.state.topTitle[3].img} />
            </div>
          </div>
        </div>


        {/* <div className="section">
          <div className="container">
              {HomeData.length !== 0 && HomeData.map((item, index) => {
                return item.id === 5 ? (
                  <div key={index}>
                    <div className="max-width-800 text-center">
                        <h2 className="font-size-60">{this.props.title}</h2>
                        <p>{this.props.info}</p>
                    </div>
                    <div className="row">
                      <CircleIconSecton key={index} {...item} />
                    </div>
                  </div>
                ) : null
              })}
          </div>
        </div> */}

        {HomeData.length !== 0 && HomeData.map((item, index) => {
          return item.id === 5 ? (
            <CircleIconSecton key={index} {...item} />
          ) : null
        })}




        {/* <CircleIconBox /> */}
        
        {HomeData.length !== 0 && HomeData.map((item, index) => {
          return item.id === 6 ? (
            <ClientLogo key={index} {...item} />
          ) : null
        })}

        {/* <div className="section black-image-section-bg">
          <div className="container py-5">
            <div className="max-width-800 text-center">
              <h2 className="font-size-60 text-white">
                {this.state.topTitle[4].title}
              </h2>
              <p className="text-white opacity05 sub-title-text">
                {this.state.topTitle[4].info}
              </p>
            </div>
            <div className="row my-5">
              {HomeData.length !== 0 && HomeData.map((item, index) => {
                  return item.id === 6 ? (
                    <ClientLogo key={index} {...item} />
                  ) : null
                })}
            </div>
          </div>
        </div> */}

        <div className="section">
          <div className="container">
            <div
              style={{
                background: `url(../../assets/images/gasswiftt-be-smart.png) no-repeat`,
                backgroundSize: `contain`,
              }}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="be-smart-solution">
                    <h2 className="font-size-60 margin-top-0">
                      {this.state.topTitle[4].title}
                    </h2>
                    <p>{this.state.topTitle[4].info}</p>
                    <a href="#" className="btn-secondary">
                      Get in touch{" "}
                      <i className="fa-chevron-right fas button-icon-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterContactForm />

      </Layout>
    )
  }
}

export default IndexPage
