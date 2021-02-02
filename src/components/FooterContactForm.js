// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { Component } from "react"



export default class FooterContactForm extends Component {
  render() {
    const { features } = this.props
    return (
      <>
        <div className="section bg-primary">
          <div className="container">
            <div className="max-width-600 text-center">
              <h2 className="font-size-60 text-white">Contact us now</h2>
              <p className="text-white opacity08 sub-title-text">We will help you resolve anything going on in your mind once you write to us.</p>
            </div>
            <div className="footer-contact-form">
              <form className="form" action={this.props.action} method="post">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Your Mail" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <textarea className="form-control textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                  </div>
                </div>
                <p><input type="submit" value="Send" className="submit" /></p>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
