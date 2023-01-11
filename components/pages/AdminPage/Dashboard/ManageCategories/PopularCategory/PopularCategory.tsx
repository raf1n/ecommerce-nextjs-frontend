import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from './../../../../../../src/state/StateController';
import Table from './../../../../../shared/SharedTable/Table';

interface Props {
}

const PopularCategory: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <div>
      <Table />
    </div>
  )
}

export default PopularCategory