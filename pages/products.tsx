import React from 'react'
import { useSelector } from 'react-redux'
import CategoryPage from '../components/pages/CategoryPage/CategoryPage'
import { controller } from '../src/state/StateController'

interface Props {
}

const products: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <CategoryPage />
}

export default products