import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import PageHeader from '../../shared/PageHeader/PageHeader';

interface Props {
}

const FaqHeader: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)

  return (
    <div>
      <PageHeader slug="FAQ" link="/faq" title="Frequently asked questions" />
    </div>
  )
}

export default FaqHeader