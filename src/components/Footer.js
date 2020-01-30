import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareUp } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { MEDIA, COLORS } from '../constants/variables'

const Footer = styled.footer`
  position: relative;
  background-color: ${COLORS.darkBrown};
  color: white;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 30px;

  .container .row [class^=col-] {
    padding-left: 2.5em;
    padding-right: 2.5em;
  }

  .footer-section {
    margin: 20px auto;

    .nav-links {
      padding-left: .3em;

      a {
        text-decoration: none;
        color: white;
        display: block;
        margin-bottom: 3px;
        &:hover {
          color: ${COLORS.textDark};
        }
      }
    }

    .socials {
      margin-top: 1em;
      a {
        color: white;

        &:hover {
          color: ${COLORS.textDark};
        }
      }
    }

    .title {
      margin: 0.8em 0 0.3em auto;
      font-weight: 700;
      color: ${COLORS.lightBrown};
    }
  }
`

const StyledIcon = styled(props => <FontAwesomeIcon {...props} />)`
  color: #e6be8a;
  font-size: 48px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`

const FooterBar = ({ jumpToTop }) => {
  const { footer } = useStaticQuery(graphql`
    query Footer {
      footer: datoCmsFooter {
        phone
        email
        facebookLink
        instagramLink
      }
    }
  `)

  const { phone, email, facebookLink, instagramLink } = footer

  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="footer-section">
              <div className="title">Cerulean Diamonds</div>
              <div className="nav-links">
                <Link to="/about">About</Link>
                <Link to="/educate">Educate</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-section">
              <div className="title">Find Us On:</div>
              <div className="socials">
                <a href={facebookLink}>
                  <FontAwesomeIcon
                    className="mr-3"
                    size="2x"
                    icon={faFacebook}
                  />
                </a>
                <a href={instagramLink}>
                  <FontAwesomeIcon
                    className="mr-3"
                    size="2x"
                    icon={faInstagram}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-section">
              <div className="title">Phone</div>
              <div>{phone}</div>
            </div>

            <div className="footer-section">
              <div className="title">Email</div>
              <div>{email}</div>
            </div>
          </div>
        </div>
      </div>
      <StyledIcon onClick={() => jumpToTop()} icon={faCaretSquareUp} />
    </Footer>
  )
}

export default FooterBar
