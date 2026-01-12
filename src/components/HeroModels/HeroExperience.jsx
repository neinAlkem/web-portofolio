import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { World } from './World'

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas camera={{ position: [0,0,15], fov: 45}}>
        <ambientLight intensity={0.2} color='#1a1a40' />
        <directionalLight position={[5,5,5]} intensity={2} />
        <OrbitControls
         autoRotate autoRotateSpeed={1.5}
         enablePan={false}
         enableZoom={!isTablet}
         maxDistance={4}
         minDistance={4}
         minPolarAngle={Math.PI/5}
         maxPolarAngle={Math.PI/2}
        />
        <group
        scale={isMobile ? 1.4 : 1}
        >
            <World />
        </group>
      
    </Canvas>
  )
}

export default HeroExperience