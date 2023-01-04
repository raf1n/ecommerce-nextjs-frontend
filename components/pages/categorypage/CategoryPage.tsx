import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import FilterWidget from './FilterWidget';

interface Props {
}

const CategoryPage: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <div className='container-x mx-auto'>
      <div className='lg:flex lg:gap-x-[30px]'>
        <div className='lg:w-[270px]'>
          <FilterWidget />
        </div>
        <div className="flex-1 min-h-screen">
          
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;