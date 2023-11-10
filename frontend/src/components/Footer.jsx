import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-light'>
      <Container>
        <Col>
          <Row>
            <Col className='text-center py-3'>
              <p>Mash Elite Performance &copy; {currentYear} | Not Wix</p>
              <div className='social-media-icons'>
                <a href='https://www.facebook.com' className='social-media-link'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='https://twitter.com' className='social-media-link'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='https://www.instagram.com' className='social-media-link'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com' className='social-media-link'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </footer>
  )
}

export default Footer
