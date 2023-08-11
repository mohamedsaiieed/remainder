import React from 'react'
import { Row,Col } from 'react-bootstrap'

function DateList({dates}) {
  return (
    <Row className='justify-content-center'>
    <Col sm="8" className=''>
    <div className='square p-2'>
    {dates.length ? (dates.map((item) => {
      return (
        <div key={item.id} className='d-flex border-bottom mx-3 my-2'>
        <img className='img-avatar' src={item.img} alt='' />
        <div className='px-3'>
          <p className='d-inline fs-5'>{item.name}</p>
          <p className='fs-6'>{item.time}</p>
        </div>
      </div>
      )
    })) : <h2 className='text-center'>لا يوجد مواعيد اليوم</h2>}
    </div>
    </Col>
    </Row>
  )
}

export default DateList
