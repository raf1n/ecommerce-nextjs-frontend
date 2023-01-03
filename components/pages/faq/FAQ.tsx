import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import FaqHeader from './FaqHeader'

interface Props {
}

const FAQ: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states)
  
  return (
    <div>
      <FaqHeader />
    </div>
  )
}

export default FAQ