// This code returns the middle part of the overview section
import React from 'react'
import MiddleBottom from './MiddleBottom'
import MiddleTop from './MiddleTop'

const Middle = () => {
    return (
      <div className='middle'>
        <MiddleTop />
        <MiddleBottom />
    </div>
  )
}

export default Middle