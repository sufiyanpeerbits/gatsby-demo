// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { Component } from "react"



export default class ClientLogoSection extends Component {
  render() {
    const { features } = this.props
    return (
      <>
        <div className="section black-image-section-bg">
            <div className="container py-5">
                <div className="max-width-900 text-center">
                <h2 className="font-size-60 text-white">
                    {this.props.title}
                </h2>
                <p className="text-white opacity05 sub-title-text">
                    {this.props.info}
                </p>
                </div>
                <div className="row my-5">
                    {features && features.map((item, index) => (
                        <div className="col-md-3" key={index}>
                            <div className={item.info}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </>
    )
  }
}
