import React, { useEffect } from 'react'
import { connect } from 'react-redux/es/exports'
import { fetchProducts } from '../redux/products/productActions'
import Card from 'react-bootstrap/Card'

function ProductContainer({ productData, fetchProducts }) {
    useEffect(() => {
        fetchProducts()
    }, [])
    return productData.loading ? (
        <h2>loading</h2>
      ) : productData.error ? (
        <h2>{productData.error}</h2>
      ) : (
        <div className='container mt-3'>
      <h2 className='text-center'>Products - To be launched</h2>

        <div className="row d-flex justify-content-center align-items-center">
        {
          productData.products.map(product => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-5 card_style">
                  <Card.Img variant="top" src={product.image} style={{height:"14rem", width: "15rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    Price : ₹ {product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
        </div>
      )
}

const mapStateToProps = state => {
    return {
        productData: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)