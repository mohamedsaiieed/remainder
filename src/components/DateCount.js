import React from 'react'
import { Row,Col } from 'react-bootstrap'

function DateCount({dates}) {
  return (
    <Row className='justify-content-center py-3'>
    <Col sm="8" className=''>
    لديك {dates.length} مواعيد
    </Col>
    </Row>
  )
}

export default DateCount
