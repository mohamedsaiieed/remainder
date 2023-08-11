import React from 'react'
import { Row,Col } from 'react-bootstrap'

function DateAction({dateDel,dateView}) {

  return (
    <Row className='justify-content-center my-2'>
    <Col sm="8" className='d-flex justify-content-between'>
      <button onClick={dateDel} className='btn-style p-1'>مسح الكل</button>
      <button onClick={dateView} className='btn-style p-1'>عرض المواعيد</button>
    </Col>
    </Row>
  )
}

export default DateAction
