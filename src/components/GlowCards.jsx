import React from 'react'
import { useRef } from 'react'

const GlowCards = ({card, children, index}) => {
    const cardRefs = useRef([])

    const hanldeMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if(!card) return;

        const rect = card.getBoundingClientRect()
        const mouseX = e.clientX - rect.left - rect.width / 2
        const mouseY = e.clientY - rect.top - rect.height / 2

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
        angle = (angle + 360) % 360
        card.style.setProperty('--start', angle + 60)
    }
  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={hanldeMouseMove(index)} className='card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column'>
        <div className='glow'/>
        <div className='flex items-center gap-1 mb-5 '>
            {Array.from({length:5}, (_, i) => (
                <img src='/assets/images/star.png' alt="stars" key={i} />
            ))}
        </div>
           <div className='mb-5'>
                <p className='text-whtie-50'>{card.review}</p>
            </div>
            {children}
    </div>
  )
}

export default GlowCards