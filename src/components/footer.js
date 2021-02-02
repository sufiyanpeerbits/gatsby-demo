// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const footer = ({ siteTitle }) => (
  <footer className="clearboth">
    <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a className="d-block pb-4" href="/"><img src={require("../assets/images/logo-white.png")} /></a>
            <p>B/701, Siddhi Vinayak Towers,<br />
              Off S.G.Road, Makarba,<br />
              Ahmedabad-380051
              </p>
          </div>
          <div className="col-md-4">
            <h4 className="title">Why Gasswiftt</h4>
            <ul className="footer-menu mb-0">
              <li className="list-item"><a href="/about/">About Us</a></li>
              <li className="list-item"><a href="/">Cooking Solution</a></li>
              <li className="list-item"><a href="/">Fuel Solutions</a></li>
              <li className="list-item"><a href="/">Blog</a></li>
              <li className="list-item"><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="title">Have Questions?</h4>
            <div className="call-us">
              <p className="white-col mb-2">Call us 24/7</p>
              <p className="mb-2"><a href="tel:+14695223385">+1 469 522-3385</a> (USA)</p>
              <p className="mb-2"><a href="tel:+91 95740 78295">+919574078295</a> (India)</p>
              <div className="mt-3 d-block">
              <p className="mb-2">Skype:<a href="skype:enquiry.peerbits?chat"> enquiry.peerbits</a></p>
              <p className="mb-2">Email: <a href="mailto:info@peerbits.com">info@peerbits.com</a></p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="sub-footer">
        <div className="container">
          <div className="d-flex">
            <div col>
              <p className="m-0">© 2021 GasSwift. All Rights Reserved.</p>
            </div>
            <div className="col text-right">
              <div className="social-networks">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fab fa-linkedin-in"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default footer
