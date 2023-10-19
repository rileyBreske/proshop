import React from 'react'
import { Container } from 'react-bootstrap'

const bioStyle = {
  textAlign: 'center',
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  background: '#f7f7f7',
}

function Biography() {
  return (
    <div style={bioStyle}>
      <Container>
        <h3>TRAVIS MASH</h3>
        <p>
          Travis Mash has spent decades studying the barbell. He is one of the few people - if not the only one - to bridge the worlds of
          powerlifting, Olympic weightlifting, and athletic strength and conditioning.
        </p>
        <p>
          Travis was a World Champion in powerlifting. He competed in a world-class level in Olympic weightlifting. He has coached professional
          Olympic weightlifters alongside Don McCauley and Glenn Pendlay at Team MDUSA, has been the head coach multiple times for TeamUSA
          weightlifting at international competitions, and is now the head coach of the most successful weightlifting team in America.
        </p>
        <p>
          He has coached 8-year-olds, high school athletes going for D-1 scholarships, NFL players, elite powerlifters, average Joes wanting to get in
          shape, Olympic hopefuls, and even middle-aged mothers who struggled to do a weightless squat.
        </p>
        <p>No one else understands all aspects of the barbell better than Travis Mash. And now his insight can be yours.</p>
      </Container>
    </div>
  )
}

export default Biography
