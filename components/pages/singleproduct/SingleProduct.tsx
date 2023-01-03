import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const SingleProduct: React.FC<Props> = (props) => {

  const states = useSelector(() => controller.states)
  
  return (
    <div className='w-full bg-white pb-[60px] '>
      <div className='container-x mx-auto lg:flex justify-between '>
        <div className='lg:w-1/2 xl:mr-[70px] lg:mr-[50px] bg-slate-500 min-h-screen'>

        </div>
        <div className='flex-1 bg-slate-900 min-h-screen'>

        </div>
      </div>
    </div>
  )
}

export default SingleProduct