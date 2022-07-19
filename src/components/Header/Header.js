import React from 'react';
import style from './Header.module.css';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Calendar from 'react-calendar';

function Header(){

  const [date, setDate] = useState(new Date());

  return (
    <Row>
      <Col>
        <div className={style.root}>Daily check List</div>

    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>  

      </Col>
    </Row>

  )  
}

export default Header

