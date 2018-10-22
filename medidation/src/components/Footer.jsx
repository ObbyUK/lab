import React from 'react';
import CookieToastColumn from './CookieToastColumn.jsx';

import './footer.less';

export default () => (
  <footer id="footer" className="footer">

    <div className="footer__cookie-toast">
      <CookieToastColumn
        toasts={[
          {
            name: "obbyCookieConfirmation8",
            text: "We use cookies to enhance your user experience, improve our site and better our product. By continuing to browse your agree to our cookie policy."
          },
        ]}
      />
    </div>

    <div className='container-fluid'>
      <div className='row'>
        <div className="col-lg-6 col-md-5 col-sm-12">
          <div className="col-xs-12">
            <img src="/icons/logo-navy.svg" alt="Obby - Discover London's favourite courses, classes and workshops." title="Obby - Discover London's favourite courses, classes and workshops." className="img-responsive footer-logo" />
            <h3>With passionate teachers and inspiring environments, Obby is on a mission to get everyone to rethink learning. From pottery to salsa, piano to Spanish, discover the best classes, courses and workshops London has to offer.</h3>
          </div>

          <div className="social-icons col-xs-12">
            <span className="social-button">
              <a href="https://www.facebook.com/obbyuk/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/facebook-dark.svg"
                  alt={`Share Obby class in London via twitter`}
                />
              </a>
            </span>
            <span className="social-button">
              <a href="https://www.instagram.com/obbyuk/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/instagram-dark.svg"
                  alt={`Share Obby class in London via twitter`}
                />
              </a>
            </span>
            <span className="social-button">
              <a href="https://twitter.com/ObbyUK" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/twitter-dark.svg"
                  alt={`Share Obby class in London via twitter`}
                />
              </a>
            </span>
          </div>
        </div>

        <div className='d-block d-md-none col-xs-12 footer__links'>
          <div className='row'>
            <div className='col'>
              <a href="https://obby.co.uk/about-us"><h4>About</h4></a>
            </div>
            <div className='col'>
              <a href="https://obby.co.uk/blog"><h4>Blog</h4></a>
            </div>
            <div className='col'>
              <a href="https://obby.co.uk/contact-us"><h4>Contact</h4></a>
            </div>
            <div className='col'>
              <a href="https://obby.co.uk/terms"><h4>Terms</h4></a>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-7 d-none d-md-block footer__links--big">
          <div className="row">
            <div className="col-xs-6 col-sm-4 footer__link--big">
              <h4>Company</h4>
              <ul>
                <li><a href="https://obby.co.uk/about-us">About us</a></li>
                <li><a href="https://obby.co.uk/contact-us">Contact us</a></li>
                <li><a href="https://obby.co.uk/terms">Terms</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-sm-4 footer__link--big">
              <h4>Discover</h4>
              <ul>
                <li><a href="https://obby.co.uk/blog">Blog</a></li>
                <li><a href="https://obby.co.uk/group-workshops/london">For groups</a></li>
                <li><a href="https://obby.co.uk/gift">Gift cards</a></li>
                <li><a href="https://obby.co.uk/invite">Give & get £10</a></li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-4 footer__link--big">
              <h4>Teaching</h4>
              <ul>
                <li><a href="https://join.obby.co.uk/findoutmore/">List your class</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="end-of-footer" style={{ height: '1px', width: '100%' }}></div>
  </footer>
);
