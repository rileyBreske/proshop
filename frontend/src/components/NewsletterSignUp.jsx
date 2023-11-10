import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const NewsletterSignUp = () => {
  const [email, setEmail] = useState('')

  const handleSignUp = () => {
    // Handle the form submission here (e.g., send the email to your server).
  }

  return (
    <Container className='newsletter-container'>
      <Card.Body className='newsletter-card'>
        <Card.Title as='h6' className='newsletter-header'>
          Sign Up for Our Newsletter!
        </Card.Title>
        <Container className='newsletter-form'>
          <form className='d-flex newsletter-form'>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='newsletter-input'
            />
            <Button type='button' onClick={handleSignUp} variant='primary' className='newsletter-button'>
              Sign Up
            </Button>
          </form>
        </Container>
      </Card.Body>
    </Container>
  )
}

export default NewsletterSignUp
