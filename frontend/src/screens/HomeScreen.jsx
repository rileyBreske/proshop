import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import NewsletterSignUp from '../components/NewsletterSignUp'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useGetProductsQuery } from '../slices/productsApiSlice'

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <div style={{ margin: '10px 0' }}></div>
          <h1>Latest E-Books</h1>
          <div style={{ margin: '40px 0' }}></div>
          {/* Add some vertical spacing here */}

          <Row>
            {products.map((products) => (
              <Col key={products.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={products} />
              </Col>
            ))}
          </Row>
          <div style={{ margin: '120px 0' }}></div>
          {/* Add some vertical spacing here */}
          <Row>
            <NewsletterSignUp />
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
