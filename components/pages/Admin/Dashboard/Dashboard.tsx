import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from './../../../../src/utils/StateController';

interface Props {
}

const Dashboard: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <div className='flex-1'>
      Dashboard
    </div>
  )
}

export default Dashboard