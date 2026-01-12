import React from 'react'
import { div } from 'three/tsl'
import { abilities } from '../constants'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
        <div className='mx-auto grid-3-cols items'>
            {abilities.map(({imgPath, title, desc}) => (
                <div className='card-border rounded-xl p-8 flex flex-col gap-4 items-center text-center' key={title}>
                    <div className='size-14 flex items-center justify-center rounded-full'>
                        <img src={imgPath} alt={title} />
                    </div>
                    <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                    <p className='text-white-50 text-lg'>{desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards