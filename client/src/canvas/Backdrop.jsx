import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.81}
      scae={15}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.5]}
    >
      <RandomizedLight 
        amount={3}
        radius={2}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -8]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.5}
        ambient={0.5}
        position={[5, 5, 9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop